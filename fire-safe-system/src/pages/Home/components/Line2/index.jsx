import { Col, Row } from 'antd';
import Card from '@/components/Card/style1';
import { Bar,Pie } from '../Charts';
// import { Pie } from 'ant-design-pro/lib/Charts';

import styles from  './style.less'

const Line2 = (props) => {
  const { productCount, repairStatusData, extinguishTypesData} = props;
  return (
    <Row span={24}>
      <Col span={8}>
        <Card title="设备数量">
          <Pie
            hasLegend
            total={() => (
              <span
                dangerouslySetInnerHTML={{
                  __html:  `<div><div>${productCount.reduce((pre, now) => now.y + pre, 0)}个</div></div>`,
                }}
              />
            )}
            data={productCount}
            valueFormat={(val) => <span dangerouslySetInnerHTML={{ __html: val + '个' }} />}
            height={150}
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="检修情况">
        <Pie
          inner={0}
            hasLegend
            total={() => (
              <span
                dangerouslySetInnerHTML={{
                  __html:  `<div><div>${repairStatusData.reduce((pre, now) => now.y + pre, 0)}</div></div>`,
                }}
              />
            )}
            data={repairStatusData}
            valueFormat={(val) => <span dangerouslySetInnerHTML={{ __html: val + '个' }} />}
            height={150}
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="灭火器分类">
          <Bar height={225} data={extinguishTypesData} />
        </Card>
      </Col>
    </Row>
  );
};

export default Line2;
