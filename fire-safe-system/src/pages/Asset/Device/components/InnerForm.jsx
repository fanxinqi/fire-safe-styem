import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import OrgSelect from '@/components/OrgSelect';
import LocationSelect from '@/components/LocationSelect';
import ProductTypeSelect from '@/components/ProductTypeSelect';
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
      <Form.Item label="存放点" name="locationId">
        <LocationSelect />
      </Form.Item>
      <Form.Item label="设备类型" name="productTypeName">
        <ProductTypeSelect />
      </Form.Item>
      <Form.Item label="设备编号" name="deviceNo">
        <Input />
      </Form.Item>
      <Form.Item label="标志明码" name="markCode">
        <Input />
      </Form.Item>
      <Form.Item label="生产厂家" name="manufacturer">
        <Input />
      </Form.Item>
      <Form.Item label="品牌" name="brand">
        <Input />
      </Form.Item>
      <Form.Item label="类型" name="deviceType">
        <Input />
      </Form.Item>
      <Form.Item label="型号" name="deviceModel">
        <Input />
      </Form.Item>
      <Form.Item label="生产日期" name="produceDate">
        <DatePicker />
      </Form.Item>
      <Form.Item label="上次检测时间" name="checkTime">
        <DatePicker />
      </Form.Item>
      <Form.Item label="上次检测时间" name="repairTime">
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
