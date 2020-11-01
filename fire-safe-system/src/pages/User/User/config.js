export const fields = [
  {
    title: '编号',
    dataIndex: 'userId',
  },
  {
    title: '用户名',
    dataIndex: 'username',
  },
  {
    title: '密码',
    dataIndex: 'password',
  },
  {
    title: '角色名',
    dataIndex: 'roleIds',
    render: (text, row, index) => {
      if (Array.isArray(row.roles) && row.roles.length > 0) {
        return row.roles[0].roleName;
      } else {
        return null;
      }
    },
  },
  {
    title: '手机号',
    dataIndex: 'mobile',
  },
];

export const fieldsKey = 'userId';
export const formName = '用户';
export const apiUrl = {
  query: '/api/user/list',
  remove: '/api/user/delete',
  update: '/api/user/edit',
  add: '/api/user/add',
};
