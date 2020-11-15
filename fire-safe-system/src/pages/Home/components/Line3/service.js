import request from '@/utils/request';
import { apiUrl } from './config';

export async function query(params) {
  params.limit = params.pageSize;
  params.page = params.current
  const res = await request(apiUrl.query, {
    method: 'POST',
    data: params,
  });

  return {
    data: res.data.devices,
    success: true,
    current: parseInt(`${params.currentPage}`, 10) || 1,
    total: res.data.totalCount,
  };
}
