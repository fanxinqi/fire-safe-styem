const deviceStatus = {
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
    title: '公司名称',
    dataIndex: 'orgName',
  },
  {
    title: '地图编号',
    dataIndex: 'mapId',
  },
  {
    title: '存放点',
    dataIndex: 'locationName',
  },
  {
    title: '地图名字',
    dataIndex: 'mapName',
  },
];

export const fieldsKey = 'mapId';
export const fieldsCitySelectKey = 'district';
export const formName = '地图';
export const apiUrl = {
  queryProductType: '/api/productType/list',
  query: '/api/map/list',
  remove: '/api/map/delete',
  update: '/api/map/edit',
  add: '/api/map/add',
};
