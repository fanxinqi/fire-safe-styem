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
    dataIndex: 'subTaskNo',
  },
  {
    title: '开始时间',
    dataIndex: 'startTime',
  },
  {
    title: '结束时间',
    dataIndex: 'endTime',
  },
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

const TaskDoDetail = (props) => {
  const { data={} } = props;
  const  { taskNo } = data;
  const actionRef = useRef();
  return (
    <ProTable
      headerTitle={'任务执行详情'}
      actionRef={actionRef}
      options={false}
      rowKey="key"
      //   toolBarRender={() => [
      //     <Button type="primary" onClick={() => handleModalVisible(true)}>
      //       <PlusOutlined /> 新建
      //     </Button>,
      //   ]}
      //   expandable={{ defaultExpandedRowKeys: defaultExpanded }}
      request={(params, sorter, filter) => query({ ...params, taskNo })}
      columns={fields}
    />
  );
};

export default TaskDoDetail;
