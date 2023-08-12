import { FormProps, RuleObject } from 'ant-design-vue/es/form';
import { VNode } from 'vue';

export type ComponentType =
  | 'Input'
  | 'InputGroup'
  | 'InputPassword'
  | 'InputSearch'
  | 'InputTextArea'
  | 'InputNumber'
  | 'Select'
  | 'TreeSelect'
  | 'RadioButtonGroup'
  | 'RadioGroup'
  | 'Checkbox'
  | 'CheckboxGroup'
  | 'AutoComplete'
  | 'Cascader'
  | 'DatePicker'
  | 'MonthPicker'
  | 'RangePicker'
  | 'WeekPicker'
  | 'TimePicker'
  | 'TimeRangePicker'
  | 'Switch'
  | 'Upload'
  | 'Slider'
  | 'Rate'
  | 'Divider'
  | 'Custom';

type Layout = 'horizontal' | 'vertical' | 'inline';

type CustomOption = {
  columns: FormItemOption[];
  layout: Layout;
};

type renderCallbackParams = {
  model: Recordable;
  name: string;
};

export type FormItemOption = {
  name: string;
  label?: string;
  slot?: boolean;
  component: ComponentType;
  componentProps?: Recordable;
  rules?: RuleObject | RuleObject[];
  render?: (renderCallbackParams: renderCallbackParams, opts?: Recordable) => VNode | VNode[] | string;
  defaultValue?: any;
};

export type FormOption = FormProps & CustomOption;
