import request from '@/utils/request';
import { apiUrl } from './config';

function toTree(menuList) {
  const objTree = [];
  menuList.forEach((item) => {
    let ObjItem = {
      title: item.name,
      key: item.menuId,
    };
    if (Array.isArray(item.list)) {
      let children = toTree(item.list);
      ObjItem['children'] = children;
    }
    objTree.push(ObjItem);
  });
  return objTree;
}
export async function query(params) {
  const res = await request(apiUrl.query, {
    method: 'GET',
    data: params,
  });

  return toTree(res.menuList);
}
