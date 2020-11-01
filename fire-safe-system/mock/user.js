function getFakeCaptcha(req, res) {
  return res.json('captcha-xxx');
} // 代码中会兼容本地 service mock 以及部署站点的静态数据

const userList = [
  {
    companyName: '公司名称1',
    phone: '173102361908',
    userName: '用户名',
    email: '邮箱',
    role: {
      id: 1,
      name: '销售人员',
      dec: '角色描述',
      createPepole: '创建人',
      createTime: '创建日期',
    },
  },
  {
    companyName: '公司名称1',
    phone: '173102361908',
    userName: '用户名',
    email: '邮箱',
    role: {
      id: 1,
      name: '销售人员',
      dec: '角色描述',
      createPepole: '创建人',
      createTime: '创建日期',
    },
  },
];

export default {
  // 支持值为 Object 和 Array
  'GET /api/currentUser': {
    name: 'Serati Ma',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'antdesign@alipay.com',
    signature: '海纳百川，有容乃大',
    title: '交互专家',
    group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
    tags: [
      {
        key: '0',
        label: '很有想法的',
      },
      {
        key: '1',
        label: '专注设计',
      },
      {
        key: '2',
        label: '辣~',
      },
      {
        key: '3',
        label: '大长腿',
      },
      {
        key: '4',
        label: '川妹子',
      },
      {
        key: '5',
        label: '海纳百川',
      },
    ],
    notifyCount: 12,
    unreadCount: 11,
    country: 'China',
    geographic: {
      province: {
        label: '浙江省',
        key: '330000',
      },
      city: {
        label: '杭州市',
        key: '330100',
      },
    },
    address: '西湖区工专路 77 号',
    phone: '0752-268888888',
  },
  // GET POST 可省略
  'GET /api/users': [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ],
  'POST /api/login/account': (req, res) => {
    const { password, userName, type } = req.body;

    if (password === 'ant.design' && userName === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      return;
    }

    if (password === 'ant.design' && userName === 'user') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'user',
      });
      return;
    }

    if (type === 'mobile') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      return;
    }

    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    });
  },
  'POST /api/register': (req, res) => {
    res.send({
      status: 'ok',
      currentAuthority: 'user',
    });
  },
  'GET /api/500': (req, res) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },
  'GET /api/404': (req, res) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212',
    });
  },
  'GET /api/403': (req, res) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'GET /api/401': (req, res) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'GET  /api/login/captcha': getFakeCaptcha,
  'GEt /api/user/list': userList,
  'POST /api/stat/extinguisherStatus': (req, res) => {
    res.send({
      code: '1',
      msg: '成功',
      data: {
        total: 298767,
        pendingCheckCount: 29672,
        pendingRepairCount: 1767,
        pendingDiscardCount: 2167,
      },
    });
  },
  'POST /api/stat/productCount': (req, res) => {
    res.send({
      code: '1',
      msg: '成功',
      data: {
        products: [
          {
            productType: '灭火器',
            productTypeId: '1',
            productCount: 60,
          },
          {
            productType: '灭火气箱',
            productTypeId: '2',
            productCount: 26,
          },
          {
            productType: '消火栓',
            productTypeId: '3',
            productCount: 36,
          },
          {
            productType: '器材箱',
            productTypeId: 4,
            productCount: 40,
          },
          {
            productType: '其他',
            productTypeId: 0,
            productCount: 38,
          },
        ],
      },
    });
  },
  'POST /api/stat/repairStatus': (req, res) => {
    res.send({
      code: '1',
      msg: '成功',
      data: {
        total: 500,
        checkedCount: 1,
        repairedCount: 2,
        discardedCount: 3,
      },
    });
  },
  'POST /api/stat/extinguishAgent': (req, res) => {
    res.send({
      code: '1',
      msg: '成功',
      data: {
        extinguishTypes: [
          {
            extinguishType: 'abc干粉',
            productCount: 400,
          },
          {
            extinguishType: '水基',
            productCount: 500,
          },
          {
            extinguishType: '二氧化碳',
            productCount: 89,
          },
          {
            extinguishType: '空气',
            productCount: 523,
          },
        ],
      },
    });
  },
  
  'GET /api/productType/list': (req, res) => {
    res.send({
      code: '1',
      msg: '查询成功',
      data: {
        totalCount: '100',
        totalPage: '10',
        pageIndex: '1',
        productTypes: [
          {
            productTypeId: '1',
            productType: '1',
            doc1Id: '1',
            doc2Id: '2',
            doc3Id: '3',
            doc4Id: '3',
            doc5Id: '4',
            doc6Id: '5',
            orgName: 'chess',
          },
        ],
        docs: [
          {
            docNo: '',
            docName: '',
          },
        ],
      },
    });
  },
};
