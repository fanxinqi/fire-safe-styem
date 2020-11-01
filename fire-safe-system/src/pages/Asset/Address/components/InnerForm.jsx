import React from 'react';
import { Form, Input, Button, Select } from 'antd';
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

      <Form.Item label="地址简称" name="shortName">
        <Input />
      </Form.Item>


      <Form.Item label="所在地区" name="district">
        <CitySelect />
      </Form.Item>

      <Form.Item label="详细地址" name="address">
        <Input />
      </Form.Item>

      <Form.Item label="邮编" name="zipcode">
        <Input />
      </Form.Item>
      <Form.Item label="联系人" name="contactPeople">
        <Input />
      </Form.Item>

      <Form.Item label="联系电话" name="mobile">
        <Input />
      </Form.Item>
      <Form.Item label="经度" name="latitude">
        <Input />
      </Form.Item>
      <Form.Item label="纬度" name="longitude">
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
