import React from 'react';
import { Descriptions } from 'antd';
const ViewDetail = (props) => {
  const { title = '任务详情', data } = props;
  const {
    orgName = '--',
    deviceNo = '--',
    productTypeName = '--',
    locationsName = '--',
    markCode = '--',
    manufacturer = '--',
    brand = '--',
    deviceType = '--',
    deviceModel = '--',
    produceDate = '--',
    longitude = '--',
    latitude = '--',
    remark = '--',
    checkTime = '--',
    repairTime = '--',
  } = data || {};
  return (
    <Descriptions>
      <Descriptions.Item label="机构名称">{orgName}</Descriptions.Item>
      <Descriptions.Item label="设备类型">{productTypeName}</Descriptions.Item>
      <Descriptions.Item label="设备编号">{deviceNo}</Descriptions.Item>
      <Descriptions.Item label="存放点">{locationsName}</Descriptions.Item>
      <Descriptions.Item label="标志明码">{markCode}</Descriptions.Item>
      <Descriptions.Item label="生产厂家">{manufacturer}</Descriptions.Item>
      <Descriptions.Item label="品牌">{brand}</Descriptions.Item>
      <Descriptions.Item label="类型">{deviceType}</Descriptions.Item>
      <Descriptions.Item label="型号">{deviceModel}</Descriptions.Item>
      <Descriptions.Item label="生产日期">{produceDate}</Descriptions.Item>
      <Descriptions.Item label="经度">{longitude}</Descriptions.Item>
      <Descriptions.Item label="纬度">{latitude}</Descriptions.Item>
      <Descriptions.Item label="备注">{remark}</Descriptions.Item>
      <Descriptions.Item label="上次检测时间">{checkTime}</Descriptions.Item>
      <Descriptions.Item label="上次维修时间">{repairTime}</Descriptions.Item>
    </Descriptions>
  );
};

export default ViewDetail;
