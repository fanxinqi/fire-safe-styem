import { ChartCard } from '../Charts';
import { Col, Row, Tooltip, Icon } from 'antd';
import { line1Config } from './../../config';

import styles from './style.less';
const Line1 = (props) => {
  const { data } = props;
  const span = 24 / Object.keys(data).length;
  return (
    <Row type="flex" style={{ background: '#ffffff', width: '100%' }}>
      {line1Config.map((item) => (
        <Col className={styles.chartCard} key={item.key} span={span}>
          <ChartCard
            title={item.title}
            avatar={<img alt="indicator" style={{ width: 30, height: 30 }} src={item.icon} />}
            action={
              <Tooltip title={item.title}>
                <Icon type="info-circle-o" />
              </Tooltip>
            }
            total={data[item.key]}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Line1;
