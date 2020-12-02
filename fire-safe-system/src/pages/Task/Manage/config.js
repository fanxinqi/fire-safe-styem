export const taskType = {
  task_type_check: '巡检',
  task_type_inspection: '检测',
  task_type_position: '定位',
  task_type_add_device: '新增',
  task_type_repair: '维修',
};

export const timeTypeMap = {
  '1': '一天一次',
  '7': '一周一次',
  '30': '一月一次',
};

export const taskStatus = {
  0: '未启用',
  1: '待巡检',
  2: '未完成',
  3: '已完成',
  4: '已停用',
};

export const fields = [
  {
    title: '公司',
    dataIndex: 'orgName',
  },
  {
    title: '任务类型',
    dataIndex: 'taskType',
    render: (text, row, index) => {
      return <span>{taskType[row.taskType] || '--'}</span>;
    },
    valueEnum: {
      task_type_check: {
        text: '巡检',
        taskType: 'task_type_check',
      },
      task_type_inspection: {
        text: '检测',
        taskType: 'task_type_inspection',
      },
      task_type_position: {
        text: '定位',
        taskType: 'task_type_position',
      },
      task_type_add_device: {
        text: '新增',
        taskType: 'task_type_add_device',
      },
      task_type_repair: {
        text: '维修',
        taskType: 'task_type_repair',
      },
    },
  },
  {
    title: '设备类型',
    dataIndex: 'productTypeName',
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
    title: '负责人',
    dataIndex: 'assignedUsers',
    render: (text, row, index) => {
      const userNames = row.assignedUsers.map(item=>item.username)
      return <span>{userNames.join(',')}</span>;
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
    render: (text, row, index) => {
      return <span>{taskStatus[row.status] || '--'}</span>;
    },
  },
];
export const fieldsKey = 'taskNo';
export const fieldsCitySelectKey = 'district';
export const formName = '任务';
export const apiUrl = {
  query: '/api/task/list',
  remove: '/api/task/delete',
  update: '/api/task/edit',
  add: '/api/task/add',
};
