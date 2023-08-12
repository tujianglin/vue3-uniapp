<script lang="tsx">
  import type { FormExpose } from 'ant-design-vue/es/form/Form';
  import { PropType, computed, defineComponent, reactive, ref, unref, watch } from 'vue';
  import { Form } from 'ant-design-vue';
  import { omit } from 'lodash-es';
  import FormItem from './components/FormItem.vue';
  import { FormItemOption, FormOption } from './types';
  export default defineComponent({
    name: 'BasicForm',
    props: {
      options: {
        type: Object as PropType<FormOption>,
        default: () => ({}),
      },
      data: {
        type: Object,
        default: () => ({}),
      },
    },
    setup(props, { expose }) {
      const formRef = ref<FormExpose | null>(null);
      const modelRef = reactive({});
      const rulesRef = reactive({});

      const getFormItemOptions = computed(() => props.options.columns);

      const getFormBindValue = computed(() => {
        return {
          ...omit(props.options, ['columns']),
          model: modelRef,
          rules: rulesRef,
        };
      });

      const getDefaultValue = (item: FormItemOption) => {
        const isArray = ['CheckboxGroup'].includes(item.component);
        const isUndefined = ['Select'].includes(item.component);
        console.log(isUndefined);
        return isArray ? [] : isUndefined ? undefined : '';
      };

      watch(
        getFormItemOptions,
        (val) => {
          val.map((i) => {
            modelRef[i.name] = props?.data?.[i.name] || getDefaultValue(i);
            rulesRef[i.name] = i.rules;
          });
        },
        {
          deep: true,
          immediate: true,
        },
      );

      const scrollToField = (namePath: string, option: ScrollOptions) => {
        formRef.value.scrollToField(namePath, option);
      };

      expose({
        resetFields: () => formRef.value.resetFields(),
        validate: () => formRef.value.validate(),
        clearValidate: () => formRef.value.clearValidate(),
        getFieldsValue: () => formRef.value.getFieldsValue(),
        validateFields: () => formRef.value.validateFields(),
        scrollToField,
      });

      return () => (
        <Form ref={formRef} {...unref(getFormBindValue)}>
          {unref(getFormItemOptions).map((item) => (
            <FormItem option={item} model={modelRef}></FormItem>
          ))}
        </Form>
      );
    },
  });
</script>
<style lang="less" scoped></style>
