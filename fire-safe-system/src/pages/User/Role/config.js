export const fields = [
  {
    title: '编号',
    dataIndex: 'roleId',
  },
  {
    title: '角色名称',
    dataIndex: 'roleName',
  },
  {
    title: '角色描述',
    dataIndex: 'remark',
  },
];

export const fieldsKey = 'roleId';
export const formName = '角色';
export const apiUrl = {
  query: '/api/role/list',
  remove: '/api/role/delete',
  update: '/api/role/edit',
  add: '/api/role/add',
};
