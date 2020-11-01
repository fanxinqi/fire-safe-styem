import request from '@/utils/request';
import { apiUrl } from './config';

export async function query(params) {
  const res = await request(apiUrl.query, {
    method: 'GET',
    data: params,
  });

  return {
    data: res.data.list,
    success: true,
  };
}

