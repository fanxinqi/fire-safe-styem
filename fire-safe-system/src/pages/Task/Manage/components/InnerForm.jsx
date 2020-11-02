import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, DatePicker, Switch } from 'antd';
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
  const [showPeriod, setShowPeriod] = useState(false);
  const [showDeviceType, setShowDeviceType] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);

  useEffect(() => {
    if (initialValues.taskType && initialValues.taskType === 'task_type_check') {
      setShowPeriod(true);
      setShowDeviceType(true);
      setShowEndTime(true);
    } 
    if (initialValues.taskType && initialValues.taskType === 'task_type_add_device') {
      setShowDeviceType(false);
      setShowEndTime(false);
      setShowPeriod(false);
    } 
  }, []);
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={initialValues}
      onFinish={onFinish}
      onValuesChange={(value) => {
        if (value.taskType && value.taskType === 'task_type_check') {
          setShowPeriod(true);
          setShowDeviceType(true);
          setShowEndTime(true);
        }
        if (value.taskType && value.taskType === 'task_type_add_device') {
          setShowDeviceType(false);
          setShowEndTime(false);
          setShowPeriod(false);
        } 
      }}
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
      <Form.Item label={showPeriod ? '巡检区域' : '位置'} name="locationIds">
        <LocationSelect />
      </Form.Item>

      {showDeviceType && (
        <Form.Item label="设备类型" name="productTypeIds">
          <ProductTypeSelect />
        </Form.Item>
      )}

      {showPeriod && (
        <Form.Item label="巡检周期" name="period">
          <Select>
            <Option value={1}>一天一次</Option>
            <Option value={7}>一周一次</Option>
            <Option value={30}>一月一次</Option>
          </Select>
        </Form.Item>
      )}

      <Form.Item label="负责人" name="assignedUserId">
        <UserSelect />
      </Form.Item>

      <Form.Item label="开始日期" name="startTime">
        <DatePicker />
      </Form.Item>

      {showEndTime && (
        <Form.Item label="结束日期" name="endTime">
          <DatePicker />
        </Form.Item>
      )}

      {/* {showNeedCheck ? (
        <Form.Item label="是否检修" name="needCheck">
          <Switch checkedChildren="是" unCheckedChildren="否"  />
        </Form.Item>
      ) : null}
      {showNeedLocate ? (
        <Form.Item label="是否定位" name="needLocate">
          <Switch checkedChildren="是" unCheckedChildren="否"  />
        </Form.Item>
      ) : null} */}

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
      </Form.Item>
    </Form>
  );
};
export default InnerForm;
