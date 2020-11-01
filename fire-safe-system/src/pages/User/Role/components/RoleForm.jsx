import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import OrgSelect from '@/components/OrgSelect';
import LimitCheckBox from './LimitCheckBox';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};

const RoleForm = (props) => {
  const { onFinish, onFinishFailed, initialValues = {}} = props;
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="公司名"
        name="orgCode"
        // rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <OrgSelect />
      </Form.Item>
      <Form.Item
        label="角色名称"
        name="roleName"
        // rules={[{ required: true, message: '请输入角色名称' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="角色描述"
        name="remark"
        rules={[{ required: true, message: '请输入角色描述' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item label="权限" name="permissionIds" >
        <LimitCheckBox />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
      </Form.Item>
    </Form>
  );
};
export default RoleForm;
