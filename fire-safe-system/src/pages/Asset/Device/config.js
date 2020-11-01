export const fields = [
  {
    title: '公司简码',
    dataIndex: 'orgCode',
  },
  {
    title: '存放点',
    dataIndex: 'locationName',
  },
  {
    title: '设备类型',
    dataIndex: 'productTypeName',
  },
  {
    title: '设备编号',
    dataIndex: 'deviceNo',
  },
  {
    title: '设备状态',
    dataIndex: 'deviceStatus',
  },
  {
    title: '上次检测时间',
    dataIndex: 'checkTime',
  },
  {
    title: '上次维修时间',
    dataIndex: 'repairTime',
  },
];

export const fieldsKey = 'deviceId';
export const fieldsCitySelectKey = 'district';
export const formName = '设备';
export const apiUrl = {
  query: '/api/device/list',
  remove: '/api/device/delete',
  update: '/api/device/edit',
  add: '/api/device/add',
};
