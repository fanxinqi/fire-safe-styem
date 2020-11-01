import React from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import OrgSelect from '@/components/OrgSelect';
import CitySelect from '@/components/CitySelect';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};

const InnerForm = (props) => {
  const { onFinish, onFinishFailed, initialValues = {} } = props;
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label="公司名称" name="orgCode">
        <OrgSelect />
      </Form.Item>

      <Form.Item label="合同类型" name="contractType">
        <Select />
      </Form.Item>

      <Form.Item label="合同编号" name="contractNo">
        <Input />
      </Form.Item>

      <Form.Item label="服务内容" name="serviceContent">
        <Select />
      </Form.Item>

      <Form.Item label="支付方式" name="payMethod">
        <Select />
      </Form.Item>
      <Form.Item label="责任人" name="contactName">
        <Input />
      </Form.Item>

      <Form.Item label="联系电话" name="contactTel">
        <Input />
      </Form.Item>
      <Form.Item label="签订日期" name="signTime">
        <DatePicker />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
      </Form.Item>
    </Form>
  );
};
export default InnerForm;
