export const fields = [
  {
    title: '公司简码',
    dataIndex: 'orgCode',
  },
  {
    title: '所在地区',
    dataIndex: 'district',
    // hideInTable: true,
    // hideInSearch: true,
  },
  {
    title: '详细地址',
    dataIndex: 'address',
    // hideInTable: true,
    // hideInSearch: true,
  },
  {
    title: '邮编',
    dataIndex: 'zipcode',
  },
  {
    title: '联系人',
    dataIndex: 'contactPeople',
  },
  {
    title: '联系电话',
    dataIndex: 'mobile',
  },
];

export const fieldsKey = 'addressId';
export const fieldsCitySelectKey = 'district';
export const formName = '地址';
export const apiUrl = {
  query: '/api/address/list',
  remove: '/api/address/delete',
  update: '/api/address/edit',
  add: '/api/address/add',
};
