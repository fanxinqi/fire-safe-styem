import request from '@/utils/request';
import { apiUrl } from './config';
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
  params.limit = params.pageSize;
  params.page = params.current
  const res = await request(apiUrl.query, {
    method: 'GET',
    params: params,
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    // },
  });

  return {
    data: res.data.list,
    success: true,
    current: parseInt(`${params.currentPage}`, 10) || 1,
    total: res.data.totalCount,
  };
}
export async function remove(params) {
  return request(apiUrl.remove, {
    method: 'POST',
    data: params,
  });
}
export async function add(params) {
  return request(apiUrl.add, {
    method: 'POST',
    data: { ...params},
  });
}
export async function update(params) {
  return request(apiUrl.update, {
    method: 'POST',
    data: { ...params},
  });
}
