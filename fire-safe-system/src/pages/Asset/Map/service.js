import request from '@/utils/request';

export async function query(params) {
  const res = await request('/api/productType/list', {
    method: 'POST',
    data: params,
  });
  return {
    data: res.data.list,
    success: true,
  };
}
export async function remove(params) {
  return request('/api/productType/delete', {
    method: 'POST',
    data: { ...params, method: 'delete' },
  });
}
export async function add(params) {
  return request('/api/productType/add', {
    method: 'POST',
    data: { ...params, method: 'post' },
  });
}
export async function update(params) {
  return request('/api/productType/edit', {
    method: 'POST',
    data: { ...params, method: 'update' },
  });
}
