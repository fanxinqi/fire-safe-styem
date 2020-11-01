export const fields = [
  {
    title: '公司简码',
    dataIndex: 'orgCode',
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
