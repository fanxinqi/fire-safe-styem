import React from 'react';
import { Cascader } from 'antd';
import data from './data';

const CitySelect = (props) => {
  const { onChange, value } = props;
  return (
    <Cascader defaultValue={value} options={data} onChange={onChange} placeholder="请选择省市区" />
  );
};
export default CitySelect;
