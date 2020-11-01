import { fetchExtinguisherStatus,fetchProductCount,fetchRepairStatus,fetchExtinguishAgent } from '@/services/home';

const initState = {
  extinguisherStatus: {},
  products:[],
  repairStatus:{},
  extinguishTypes:[],
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
        payload: { ...response.data },
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
