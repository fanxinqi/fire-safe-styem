import {
  fetchExtinguisherStatus,
  fetchProductCount,
  fetchRepairStatus,
  fetchExtinguishAgent,
  fetchDevicetBylocation,
  fetchStatProductDistribute,
} from '@/services/home';

const initState = {
  extinguisherStatus: {},
  products: [],
  repairStatus: {},
  extinguishTypes: {},
  statProductDistribute: {},
};
const Model = {
  namespace: 'home',
  state: initState,
  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(fetchExtinguisherStatus);
      yield put({
        type: 'save',
        payload: { extinguisherStatus: response.data },
      });
    },
    *fetchProductCount(_, { call, put }) {
      const response = yield call(fetchProductCount);
      yield put({
        type: 'save',
        payload: { ...response.data },
      });
    },
    *fetchRepairStatus(_, { call, put }) {
      const response = yield call(fetchRepairStatus);
      yield put({
        type: 'save',
        payload: { repairStatus: response.data },
      });
    },
    *fetchExtinguishAgent(_, { call, put }) {
      const response = yield call(fetchExtinguishAgent);
      yield put({
        type: 'save',
        payload: { extinguishTypes: response.data },
      });
    },
    *fetchDeviceBylocation(_, { call, put }) {
      const response = yield call(fetchDevicetBylocation);
      yield put({
        type: 'save',
        payload: { extinguishTypes: response.data },
      });
    },
    *fetchStatProductDistribute(_, { call, put }) {
      const response = yield call(fetchStatProductDistribute);
      yield put({
        type: 'save',
        payload: { statProductDistribute: response.data },
      });
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },

    clear() {
      return initState;
    },
  },
};
export default Model;
