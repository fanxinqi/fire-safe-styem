import { ChartCard } from '../Charts';
import { Card, Col, Row, Tabs, Tooltip, Icon } from 'antd';
const Line1 = (props) => {
  const list = [1, 2, 3, 4];
  const span = 24 / list.length;
  return (
    <Row type="flex" style={{background:'#ffffff'}}>
      {list.map(() => (
        <Col span={span}>
          <ChartCard
            title="移动指标"
            avatar={
              <img
                alt="indicator"
                style={{ width: 30, height: 30 }}
                src="https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png"
              />
            }
            action={
              <Tooltip title="指标说明">
                <Icon type="info-circle-o" />
              </Tooltip>
            }
            total={12656}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Line1;
