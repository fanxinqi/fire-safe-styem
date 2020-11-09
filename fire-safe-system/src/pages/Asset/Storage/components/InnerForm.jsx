import React from 'react';
import { Form, Input, Button } from 'antd';
import OrgSelect from '@/components/OrgSelect';
import LocationSelect from '@/components/LocationSelect';
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

      <Form.Item label="上级存放点" name="parentId">
        <LocationSelect mode="" />
      </Form.Item>
      <Form.Item label="存放点名称" name="locationName">
        <Input />
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
