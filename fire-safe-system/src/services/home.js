import request from '@/utils/request';

export async function fetchExtinguisherStatus(payload) {
  return request('/api/stat/extinguisherStatus', {
    method: 'POST',
    data: payload,
  });
};

export async function fetchProductCount(payload) {
  return request('/api/stat/productCount', {
    method: 'POST',
    data: payload,
  });
};

export async function fetchRepairStatus(payload) {
  return request('/api/stat/repairStatus', {
    method: 'POST',
    data: payload,
  });
};

export async function fetchExtinguishAgent(payload) {
  return request('/api/stat/extinguishAgent', {
    method: 'POST',
    data: payload,
  });
};


