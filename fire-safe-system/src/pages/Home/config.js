import pendingCheckCountIcon from '@/assets/home/line1/pending_check_count.png';
import repairedCountIcon from '@/assets/home/line1/repaired_count.png';
import discardedCount from '@/assets/home/line1/discarded_count.png';
import totalIcon from '@/assets/home/line1/total.png';
export const line1Config = [
  {
    key: 'total',
    title: '灭火器总数',
    icon: totalIcon,
  },
  {
    key: 'pendingCheckCount',
    title: '待检测数',
    icon: pendingCheckCountIcon,
  },
  {
    key: 'repairedCount',
    title: '待维修数',
    icon: repairedCountIcon,
  },
  {
    key: 'discardedCount',
    title: '待报废数',
    icon: discardedCount,
  },
];

export const repairStatusConfig = [
  {
    key: 'total',
    name: '总数',
  },
  {
    key: 'checkedCount',
    name: '已检测',
  },
  {
    key: 'repairedCount',
    name: '已维修',
  },
  {
    key: 'discardedCount',
    name: '已报废',
  },
];

export const extinguishTypesConfig = {
  checkedCount: '已检测',
  discardedCount: '已报废',
  repairedCount: '已维修',
  total: '总数',
};
