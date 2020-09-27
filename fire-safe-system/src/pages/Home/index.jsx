import { Row } from 'antd';
import React, { Component, Suspense } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { connect } from 'umi';
import styles from './style.less';

const Line1 = React.lazy(() => import('./components/Line1'));
const Line2 = React.lazy(() => import('./components/Line2'));
const Line3 = React.lazy(() => import('./components/Line3'));

class Home extends Component {
  render() {
    return (
      <PageContainer
        title={false}
        content={
          <Suspense fallback={null}>
            <div className={styles.lin1Wrap}>
              <Line1 />
            </div>
          </Suspense>
        }
      >
        <React.Fragment>
          <Row
            gutter={24}
            style={{
              marginTop: 24,
            }}
          >
            <Suspense fallback={null}>
              <Line2 />
            </Suspense>
          </Row>
          <Row
            gutter={24}
            style={{
              marginTop: 24,
            }}
          >
            <Suspense fallback={null}>
              <Line3 />
            </Suspense>
          </Row>
        </React.Fragment>
      </PageContainer>
    );
  }
}

export default connect(({ home, loading }) => ({
  home,
  loading: loading.effects['home/fetch'],
}))(Home);
