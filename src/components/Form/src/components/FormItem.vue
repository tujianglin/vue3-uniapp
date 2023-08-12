<script lang="tsx">
  import { PropType, computed, defineComponent, unref } from 'vue';
  import { componentMap } from '../componentMap';
  import { Form, FormItemProps } from 'ant-design-vue';
  import { FormItemOption } from '../types';
  import { omit } from 'lodash-es';
  export default defineComponent({
    name: 'BasicFormItem',
    inheritAttrs: false,
    props: {
      option: {
        type: Object as PropType<FormItemOption>,
        default: () => ({}),
      },
      model: {
        type: Object,
        default: () => ({}),
      },
    },
    setup(props) {
      /* 表单内容 */
      const getContent = computed(() => {
        const { option } = props;
        const Comp = componentMap.get(option.component) as ReturnType<typeof defineComponent>;
        const isChecked = ['Checkbox', 'Radio'].includes(option.component);
        const isOther = ['InputGroup'].includes(option.component);
        const isCustom = option.component === 'Custom';
        if (isChecked) {
          return <Comp {...option.componentProps} v-model:checked={props.model[option.name]}></Comp>;
        } else if (isOther) {
          return <Comp {...option.componentProps}>{option.render({ model: props.model, name: option.name }, option.componentProps)}</Comp>;
        } else if (isCustom) {
          return option.render({ model: props.model, name: option.name });
        } else {
          return <Comp {...option.componentProps} v-model:value={props.model[option.name]}></Comp>;
        }
      });
      /* 获取绑定属性 */
      const getBindValue = computed<FormItemProps>(() => omit(props.option, ['componentProps', 'slot']));

      return () => <Form.Item {...unref(getBindValue)}>{unref(getContent)}</Form.Item>;
    },
  });
</script>
<style lang="less" scoped></style>
