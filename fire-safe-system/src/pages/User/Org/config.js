export const fields = [
  {
    title: '编号',
    dataIndex: 'id',
    hideInSearch: true,
  },
  {
    title: '上级名称',
    dataIndex: 'superiorName',
    hideInTable: true,
    hideInSearch: true,
  },
  {
    title: '上级简码',
    dataIndex: 'superiorCode',
    hideInTable: true,
    hideInSearch: true,
  },
  {
    title: '机构名称',
    dataIndex: 'orgName',
  },
  {
    title: '机构简码',
    dataIndex: 'shortName',
  },
  {
    title: '所在地区',
    dataIndex: 'region',
  },
  {
    title: '详细地址',
    dataIndex: 'address',
    hideInTable: true,
  },
  {
    title: '联系人',
    dataIndex: 'contactPeople',
  },
  {
    title: '联系电话',
    dataIndex: 'contactTel',
  },
];

export const fieldsKey = 'id';
export const formName = '机构';
