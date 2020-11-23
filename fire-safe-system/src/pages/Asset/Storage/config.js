export const fields = [
  {
    title: '公司名称',
    dataIndex: 'orgName',
  },
  {
    title: '存放点编号',
    dataIndex: 'locationId',
  },
  {
    title: '存放点',
    dataIndex: 'locationName',
  },
];

export const fieldsKey = 'locationId';
export const fieldsCitySelectKey = 'district';
export const formName = '存放点';
export const apiUrl = {
  query: '/api/location/list',
  remove: '/api/location/delete',
  update: '/api/location/edit',
  add: '/api/location/add',
};
