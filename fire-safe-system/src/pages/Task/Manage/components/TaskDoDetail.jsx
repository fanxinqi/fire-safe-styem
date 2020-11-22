import ProTable from '@ant-design/pro-table';
import { query } from './service';
import React, { useRef } from 'react';
export const taskStatus = {
  0: '未启用',
  1: '待巡检',
  2: '未完成',
  3: '已完成',
  4: '已停用',
};
export const fields = [
  {
    title: '任务编号',
    dataIndex: 'taskId',
  },
  {
    title: '检查时间',
    dataIndex: 'checkTime',
  },
  // {
  //   title: '结束时间',
  //   dataIndex: 'endTime',
  // },
  {
    title: '正常设备数',
    dataIndex: 'normalDeviceCount',
  },
  {
    title: '异常设备数',
    dataIndex: 'errorDeviceCount',
  },
  {
    title: '任务状态',
    dataIndex: 'taskStatus',
    render: (text, row, index) => {
      return <span>{taskStatus[row.taskStatus] || '--'}</span>;
    },
  },
];

export const deviceFields = [
  {
    title: '存放点',
    dataIndex: 'locationName',
  },
  {
    title: '设备类型',
    dataIndex: 'deviceType',
  },
  {
    title: '设备编号',
    dataIndex: 'deviceNo',
  },
  {
    title: '标志明码',
    dataIndex: 'markCode',
  },
  {
    title: '类型',
    dataIndex: 'productTypeName',
  },
  {
    title: '型号',
    dataIndex: 'deviceModel',
  },
];

const TaskDoDetail = (props) => {
  const { data = {} } = props;
  const { taskNo, taskType } = data;
  const actionRef = useRef();
  let headerTitle = '巡检任务执行详情';
  let thisFields = fields;
  if (taskType === 'task_type_add_device') {
    headerTitle = '新增任务执行详情';
    thisFields = deviceFields;
  }
  return (
    <ProTable
      headerTitle={headerTitle}
      actionRef={actionRef}
      options={false}
      rowKey="key"
      request={(params, sorter, filter) => query({ ...params, taskNo, taskType })}
      columns={thisFields}
    />
  );
};

export default TaskDoDetail;
