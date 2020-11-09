import { Row } from 'antd';
import { connect } from 'umi';
import React, { Component, Suspense } from 'react';
import 'ant-design-pro/dist/ant-design-pro.css';
import styles from './style.less';
import { repairStatusConfig } from './config';
import OrgSelect from '@/components/OrgSelect';

const Line1 = React.lazy(() => import('./components/Line1'));
const Line2 = React.lazy(() => import('./components/Line2'));
const Line3 = React.lazy(() => import('./components/Line3'));

class Home extends Component {
  componentDidMount() {
    this.getPageData();
  }
  getPageData() {
    this.props.dispatch({ type: 'home/fetch' });
    this.props.dispatch({ type: 'home/fetchProductCount' });
    this.props.dispatch({ type: 'home/fetchRepairStatus' });
    this.props.dispatch({ type: 'home/fetchExtinguishAgent' });
  }
  render() {
    const { home = {} } = this.props;
    const { extinguisherStatus, products = [], repairStatus, extinguishTypes } = home;
    console.log('home', home);
    const productCount = [];
    products.map((item) => {
      productCount.push({
        x: item.productType,
        y: item.productCount,
      });
    });
    const repairStatusData = [];
    Object.keys(repairStatus).forEach((key) => {
      if (key != 'locations') {
        repairStatusData.push({
          x: repairStatusConfig[key],
          y: repairStatus[key],
        });
      }
    });

    const extinguishTypesData = [];
    Object.keys(extinguishTypes).forEach((key) => {
      if (key != 'extinguishTypes') {
        extinguishTypesData.push({
          x: key,
          y: extinguishTypes[key],
        });
      }
    });
    // extinguishTypes.forEach((item) => {
    //   extinguishTypesData.push({
    //     x: item.extinguishType,
    //     y: item.productCount,
    //   });
    // });

    console.log('home', home);
    return (
      <React.Fragment>
        <div
          style={{
            marginTop: 24,
          }}
        >
          机构：
          <OrgSelect
            style={{
              width: '200px',
              marginBottom: '20px',
            }}
          />
          <Suspense fallback={null}>
            {Object.keys(extinguisherStatus).length > 0 && <Line1 data={extinguisherStatus} />}
          </Suspense>
        </div>
        <div
          style={{
            marginTop: 24,
          }}
        >
          <Suspense fallback={null}>
            <Line2
              productCount={productCount}
              repairStatusData={repairStatusData}
              extinguishTypesData={extinguishTypesData}
              // extinguisherData={extinguisherData}
            />
          </Suspense>
        </div>
        <div
          style={{
            marginTop: 24,
          }}
        >
          <Suspense fallback={null}>
            <Line3 />
          </Suspense>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(({ home, loading }) => ({
  home,
  loading: loading.effects['home/fetch'],
}))(Home);
