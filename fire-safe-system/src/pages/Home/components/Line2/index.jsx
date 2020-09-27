import { Col, Row } from 'antd';
import Card from '@/components/Card/style1';
import { Pie, Bar } from '../Charts';

const salesPieData = [
  {
    x: '灭火器',
    y: 22,
  },
  {
    x: '灭火器箱',
    y: 18,
  },
  {
    x: '消防栓',
    y: 20,
  },
  {
    x: '器材箱',
    y: 24,
  },
  {
    x: '其他',
    y: 16,
  },
];

const barData = 
[
  {
    x: 'ABC干粉',
    y: 18,
  },
  {
    x: '水基',
    y: 28,
  },
  {
    x: '二氧化碳',
    y: 60,
  },
  {
    x: '洁净气体',
    y: 5,
  },
];

// for (let i = 0; i < 12; i += 1) {
//     barData.push({
//       x: `${i + 1}月`,
//       y: Math.floor(Math.random() * 1000) + 200,
//     });
//   }

const Line2 = () => {
  return (
    <Row span={24} gutter={[16, 0]}>
      <Col span={8}>
        <Card title="设备数量">
          <Pie
            hasLegend
            total={() => (
              <span
                dangerouslySetInnerHTML={{
                  __html: salesPieData.reduce((pre, now) => now.y + pre, 0),
                }}
              />
            )}
            data={salesPieData}
            valueFormat={(val) => <span dangerouslySetInnerHTML={{ __html: val }} />}
            height={150}
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="检修情况">
          <Pie
            hasLegend
            inner={0}
            total={() => (
              <span
                dangerouslySetInnerHTML={{
                  __html: salesPieData.reduce((pre, now) => now.y + pre, 0),
                }}
              />
            )}
            data={salesPieData}
            valueFormat={(val) => <span dangerouslySetInnerHTML={{ __html: val }} />}
            height={150}
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="灭火器分类">
          <Bar height={225} data={barData} />
        </Card>
      </Col>
    </Row>
  );
};

export default Line2;
