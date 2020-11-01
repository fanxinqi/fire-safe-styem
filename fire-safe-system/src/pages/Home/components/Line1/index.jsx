import { ChartCard } from '../Charts';
import { Col, Row, Tooltip, Icon } from 'antd';
import { line1Config } from './../../config';

import styles from './style.less';
const Line1 = (props) => {
  const { data } = props;
  const span = 24 / Object.keys(data).length;
  return (
    <Row type="flex" style={{ background: '#ffffff', width: '100%' }}>
      {Object.keys(data).map(
        (key) =>
          line1Config[key] && (
            <Col className={styles.chartCard} key={key} span={span}>
              <ChartCard
                title={line1Config[key].title}
                avatar={
                  <img
                    alt="indicator"
                    style={{ width: 30, height: 30 }}
                    src={line1Config[key].icon}
                  />
                }
                action={
                  <Tooltip title={line1Config[key].title}>
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={data[key]}
              />
            </Col>
          ),
      )}
    </Row>
  );
};

export default Line1;
