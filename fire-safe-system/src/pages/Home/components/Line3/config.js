export const deviceStatus = {
  0: '正常',
  1: '待检测',
  2: '待维修',
  3: '待报废',
  4: '检测逾期',
  5: '维修逾期',
  6: '报废逾期',
  7: '报修',
  8: '报废',
  9: '丢失',
};

export const fields = [
  {
    title: '设备类型',
    dataIndex: 'deviceType',
  },
  {
    title: '设备编号',
    dataIndex: 'deviceNo',
  },
  {
    title: '位置',
    dataIndex: 'locationName',
  },
  {
    title: '设备状态',
    dataIndex: 'checkStatus',
    render: (text, row, index) => {
      return deviceStatus[row.checkStatus];
    },
  },
];

export const apiUrl = {
  query: '/api/device/bylocation',
  remove: '/api/role/delete',
  update: '/api/role/edit',
  add: '/api/role/add',
};
