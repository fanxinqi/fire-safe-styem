import React from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import OrgSelect from '@/components/OrgSelect';
import CitySelect from '@/components/CitySelect';
import LocationSelect from '@/components/LocationSelect';
import ProductTypeSelect from '@/components/ProductTypeSelect';
import UserSelect from '@/components/UserSelect';
import { taskType } from '../config';
const { Option } = Select;

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

      <Form.Item label="任务类型" name="taskType">
        <Select>
          {Object.keys(taskType).map((taskKey) => (
            <Option value={taskKey}>{taskType[taskKey]}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="巡检区域" name="locationIds">
        <LocationSelect />
      </Form.Item>
      <Form.Item label="设备类型" name="productTypeIds">
        <ProductTypeSelect />
      </Form.Item>
      <Form.Item label="频次" name="period">
        <Select>
          <Option value={1}>一天一次</Option>
          <Option value={7}>一周一次</Option>
          <Option value={30}>一月一次</Option>
        </Select>
      </Form.Item>

      <Form.Item label="负责人" name="assignedUserId">
        <UserSelect />
      </Form.Item>

      <Form.Item label="开始日期" name="startTime">
        <DatePicker />
      </Form.Item>

      <Form.Item label="结束日期" name="endTime">
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
