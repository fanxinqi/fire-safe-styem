import request from '@/utils/request';

function totree(list, parorgCode) {
  let obj = {};
  let result = [];
  //将数组中数据转为键值对结构 (这里的数组和obj会相互引用)
  list.map((el) => {
    obj[el.orgCode] = el;
  });
  for (let i = 0, len = list.length; i < len; i++) {
    let orgCode = list[i].superiorCode;
    if (orgCode == parorgCode) {
      result.push(list[i]);
      continue;
    }
    if (obj[orgCode].children) {
      obj[orgCode].children.push(list[i]);
    } else {
      obj[orgCode].children = [list[i]];
    }
  }
  return result;
}
export async function query(params) {
  const res = await request('/api/org/list', {
    method: 'POST',
    data: params,
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    // },
  });

  return {
    // data: totree(res.data.list,''),
    data: res.data.list,
    success: true,
  };
}
export async function remove(params) {
  return request('/api/org/delete', {
    method: 'POST',
    data: params,
  });
}
export async function add(params) {
  return request('/api/org/add', {
    method: 'POST',
    data: { ...params},
  });
}
export async function update(params) {
  return request('/api/org/edit', {
    method: 'POST',
    data: { ...params},
  });
}
