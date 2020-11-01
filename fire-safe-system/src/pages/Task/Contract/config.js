export const fields = [
  {
    title: '公司',
    dataIndex: 'orgCode',
  },
  {
    title: '合同类型',
    dataIndex: 'contractType',
  },
  {
    title: '合同编号',
    dataIndex: 'contractNo',
    // hideInTable: true,
    // hideInSearch: true,
  },
  {
    title: '服务内容',
    dataIndex: 'serviceContent',
  },
  {
    title: '支付方式',
    dataIndex: 'payMethod',
  },
  {
    title: '责任人',
    dataIndex: 'contactName',
  },
  {
    title: '联系电话',
    dataIndex: 'contactTel',
  },
  {
    title: '签订日期',
    dataIndex: 'signTime',
  },

];

export const fieldsKey = 'addressId';
export const fieldsCitySelectKey = 'district';
export const formName = '合同';
export const apiUrl = {
  query: '/api/contract/list',
  remove: '/api/contract/delete',
  update: '/api/contract/edit',
  add: '/api/contract/add',
};
