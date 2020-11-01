import request from '@/utils/request';
import { apiUrl } from './config';

export async function query(params) {
  const res = await request(apiUrl.query, {
    method: 'GET',
    params: params,
  });

  return {
    data: res.data.list,
    success: true,
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
