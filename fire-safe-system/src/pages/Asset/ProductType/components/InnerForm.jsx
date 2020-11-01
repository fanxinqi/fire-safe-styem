import React from 'react';
import { Form, Input, Button, Select, Switch } from 'antd';
import OrgSelect from '@/components/OrgSelect';
import CitySelect from '@/components/CitySelect';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};

const SwitchWrap = (props) => {
  const { value } = props;
  return <Switch defaultChecked={value} {...props} />;
};

const InnerForm = (props) => {
  const { onFinish, onFinishFailed, initialValues = {} } = props;

  // const renderItem = (item) => {
  //   const { title, dataIndex, valueEnum={} } = item;
  //   return (
  //     <Form.Item label={title} name={dataIndex}>
  //       <OrgSelect  />
  //     </Form.Item>
  //   );
  // };


  return (
    <Form
      {...layout}
      name="basic"
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {/* {fileds.map((item) => renderItem(item))} */}
      <Form.Item label="公司名称" name="orgCode">
        <OrgSelect />
      </Form.Item>

      <Form.Item label="产品类型" name="productType">
        <Input />
      </Form.Item>

      <Form.Item label="是否可见" name="visible">
        <SwitchWrap />
      </Form.Item>

      <Form.Item label="文档1" name="doc1">
        <Select />
      </Form.Item>
      <Form.Item label="文档2" name="doc2">
        <Select />
      </Form.Item>
      <Form.Item label="文档3" name="doc3">
        <Select />
      </Form.Item>
      <Form.Item label="文档4" name="doc4">
        <Select />
      </Form.Item>
      <Form.Item label="文档5" name="doc5">
        <Select />
      </Form.Item>
      <Form.Item label="文档6" name="doc6">
        <Select />
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
