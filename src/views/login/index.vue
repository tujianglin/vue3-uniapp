<script lang="tsx">
  import { defineComponent, reactive, ref } from 'vue';
  import { InputProps, Button } from 'ant-design-vue';
  import { BasicForm } from '/@/components/Form';
  import { FormOption } from '/@/components/Form/src/types';
  import { FormExpose } from 'ant-design-vue/es/form/Form';
  import { User } from '/@/api/modules/data-contracts';
  import api from '/@/api';
  export default defineComponent({
    setup() {
      const formRef = ref<FormExpose>();
      const options: FormOption = {
        colon: false,
        layout: 'horizontal',
        labelCol: {
          span: 2,
        },
        columns: [
          {
            name: 'username',
            component: 'Input',
            label: '用户名',
            componentProps: {
              placeholder: '请输入用户名',
            } as InputProps,
            rules: [
              {
                required: true,
                message: '请输入用户名',
                trigger: ['blur'],
              },
            ],
          },
          {
            name: 'password',
            component: 'InputPassword',
            label: '密码',
            componentProps: {
              placeholder: '请输入密码',
            } as InputProps,
            rules: [
              {
                required: true,
                message: '请输入密码',
                trigger: ['blur'],
              },
            ],
          },
        ],
      };
      const formState = reactive<User>({
        username: '',
        password: '',
      });
      const handleSubmit = () => {
        formRef.value.validate().then((res: User) => {
          api.userControllerAddUser(res).then((res) => {
            console.log(res.data.password);
          });
        });
      };
      return () => (
        <>
          <BasicForm ref={formRef} data={formState} options={options}></BasicForm>
          <Button onClick={handleSubmit}>登录</Button>
        </>
      );
    },
  });
</script>
<style lang="less" scoped></style>
