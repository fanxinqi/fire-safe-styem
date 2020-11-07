import React from 'react';
import { Descriptions } from 'antd';
import { taskType as taskTypeMap, timeTypeMap } from '../config';
const ViewDetail = (props) => {
  const { title = '任务详情', data } = props;
  const {
    orgName = '--',
    taskType,
    taskNo = '--',
    locations = [],
    productTypeName = '--',
    assignedUserName = '--',
    startTime ,
    endTime,
    period,
    createUserId,
    createTime,
  } = data || {};
  let locationsName = [];
  locations.forEach((item) => {
    locationsName.push(item.locationName);
  });
  console.log(timeTypeMap[period])
  return (
    <Descriptions>
      <Descriptions.Item label="机构名称">{orgName}</Descriptions.Item>
      <Descriptions.Item label="任务类型">{taskTypeMap[taskType]}</Descriptions.Item>
      <Descriptions.Item label="任务编号">{taskNo}</Descriptions.Item>
      <Descriptions.Item label="区域">{locationsName.join(',')}</Descriptions.Item>
      <Descriptions.Item label="设备类型">{productTypeName}</Descriptions.Item>
      <Descriptions.Item label="负责人">{assignedUserName}</Descriptions.Item>
      <Descriptions.Item label="开始时间">{startTime}</Descriptions.Item>
      <Descriptions.Item label="结束时间">{endTime}</Descriptions.Item>
      {Boolean(period) && <Descriptions.Item label="巡检周期">{timeTypeMap[period]}</Descriptions.Item>}
      <Descriptions.Item label="创建人id">{createUserId}</Descriptions.Item>
      <Descriptions.Item label="创建时间">{createTime}</Descriptions.Item>
    </Descriptions>
  );
};

export default ViewDetail;
