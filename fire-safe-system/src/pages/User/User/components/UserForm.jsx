import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Button } from 'antd';
import OrgSelect from '@/components/OrgSelect';
import RoleSelect from '@/components/RoleSelect';
import { query as queryUser } from '@/components/RoleSelect/service';
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 20 },
};

const UserForm = (props) => {
  const { onFinish, onFinishFailed, initialValues = {} } = props;
  const [roleOptions, setRoleOptions] = useState([]);
  useEffect(() => {
    (async function () {
      if (initialValues.orgCode) {
        const res = await queryUser({
          orgCode: initialValues.orgCode,
        });
        setRoleOptions(res.data);
      }
    })();
  }, []);
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={initialValues}
      onFinish={onFinish}
      onValuesChange={async (values) => {
        if (values.orgCode) {
          const res = await queryUser({
            orgCode: values.orgCode,
          });
          setRoleOptions(res.data);
        }
      }}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="公司名"
        name="orgCode"
        // rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <OrgSelect />
      </Form.Item>
      <Form.Item label="用户名" name="username">
        <Input />
      </Form.Item>
      <Form.Item label="密码" name="password">
        <Input.Password />
      </Form.Item>
      <Form.Item label="手机号" name="mobile">
        <Input />
      </Form.Item>

      <Form.Item label="邮箱" name="email">
        <Input />
      </Form.Item>
      <Form.Item label="角色" name="roleIds">
        <RoleSelect options={roleOptions} />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
      </Form.Item>
    </Form>
  );
};
export default UserForm;
