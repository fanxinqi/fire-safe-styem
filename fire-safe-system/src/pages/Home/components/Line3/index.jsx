import React from 'react';
import { Col, Row, Tabs, Select, Modal, Table } from 'antd';
// import { Bar, Pie } from '../Charts';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';
import ProTable from '@ant-design/pro-table';
import { fields as pageFields, deviceStatus } from './config';
import { query } from './service';

import styles from './style.less';
const { TabPane } = Tabs;
class Line3 extends React.Component {
  state = {
    bardata: [],
    productTypeId: 0,
    locationId: 0,
    defaultData: [],
  };
  componentDidMount() {
    setTimeout(() => {
      console.log('BMapGL', BMapGL);
      var map = new BMapGL.Map('map_root');
      console.log('map', map);
      var point = new BMapGL.Point(116.404, 39.915);
      map.centerAndZoom(point, 15);
      // 创建小车图标
      var myIcon = new BMapGL.Icon('/mark-icon.png', new BMapGL.Size(62, 62));
      // 创建Marker标注，使用小车图标
      var pt = new BMapGL.Point(116.417, 39.909);
      var marker = new BMapGL.Marker(pt, {
        icon: myIcon,
      });
      // 将标注添加到地图
      map.addOverlay(marker);
      map.addOverlay(this.createInnerMap(116.38, 39.92, 60));
      map.addOverlay(this.createInnerMap(116.432, 39.92, 60));
      map.addOverlay(this.createInnerMap(116.432, 40, 70));
      map.addOverlay(this.createInnerMap(116.432, 39.908, 70));
      map.addOverlay(this.createInnerMap(116.407, 39.908));
      map.addOverlay(this.createInnerMap(116.41, 39.908));
      map.addOverlay(this.createInnerMap(116.414, 39.911));
      map.addOverlay(this.createInnerMap(116.425, 39.911));
      map.addOverlay(this.createInnerMap(116.419, 39.911));
      map.addOverlay(this.createInnerMap(116.418, 39.91));
      map.addOverlay(this.createInnerMap(116.4, 39.9));
      map.addOverlay(this.createInnerMap(116.3, 39.9));
      map.addOverlay(this.createInnerMap(116.303, 39.905));
      map.addOverlay(this.createInnerMap(116.305, 39.906));
      map.addOverlay(this.createInnerMap(116.304, 39.909));
      map.addOverlay(this.createInnerMap(116.32, 39.7));
      // map.enableScrollWheelZoom(true);
      var scaleCtrl = new BMapGL.ScaleControl(); // 添加比例尺控件
      map.addControl(scaleCtrl);
      var zoomCtrl = new BMapGL.ZoomControl(); // 添加比例尺控件
      map.addControl(zoomCtrl);
    }, 1000);

    this.actionRef = null;
    const { defaultValue } = this.props;
    this.changeHandle(defaultValue);
  }

  createInnerMap(p, t, size) {
    var pt = new BMapGL.Point(p, t);
    var myIcon = new BMapGL.Icon('/mark-icon.png', new BMapGL.Size(size || 40, size || 40));
    var marker = new BMapGL.Marker(pt, {
      icon: myIcon,
    });
    return marker;
  }

  changeHandle = (value) => {
    const item = this.props.data.find((i) => i.productTypeId === value);
    const { locations } = item;
    const bardata = [];
    locations.forEach((currentitem, index) => {
      bardata.push({
        x: currentitem.locationName,
        y: currentitem.productCount,
        locationId: currentitem.locationId,
        productTypeId: value,
      });
      return bardata;
    });
    if (locations[0]) {
      query({
        locationId: locations[0].locationId,
        productTypeId: value,
      }).then((res) => {
        this.setState({
          defaultData: res.data,
        });
      });
    }

    this.setState({
      bardata,
    });
  };

  render() {
    const { data, defaultValue } = this.props;
    return (
      <Row
        span={24}
        style={{
          background: '#ffffff',
          padding: '20px',
        }}
      >
        <Col span={24}>
          产品类型：
          <Select
            style={{
              width: '300px',
            }}
            defaultValue={parseInt(defaultValue)}
            onChange={this.changeHandle}
          >
            {data.map((item) => (
              <Option value={item.productTypeId}>{item.productType}</Option>
            ))}
          </Select>
        </Col>
        <Col span={24}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="数据报表" key="1">
              {this.state.bardata && this.state.bardata.length > 0 && (
                <Chart
                  height={400}
                  data={this.state.bardata}
                  // scale={{
                  //   sales: {
                  //     tickInterval: 20,
                  //   },
                  // }}
                  onIntervalClick={(ev) => {
                    const data = ev.data;
                    const { _origin } = data;
                    const { locationId, productTypeId } = _origin;
                    this.setState({
                      productTypeId,
                      locationId,
                    });
                    query({
                      locationId: this.state.locationId,
                      productTypeId: this.state.productTypeId,
                    }).then((res) => {
                      this.setState({
                        defaultData: res.data,
                      });
                    });
                  }}
                  forceFit
                >
                  <Axis name="x" />
                  <Axis name="y" />
                  <Tooltip
                  // crosshairs用于设置 tooltip 的辅助线或者辅助框
                  // crosshairs={{
                  //  type: "y"
                  // }}
                  />
                  <Geom type="interval" position="x*y" />
                </Chart>
              )}

              <Table dataSource={this.state.defaultData} columns={pageFields} />
              {/* <ProTable
                options={false}
                defaultData={this.state.defaultData}
                actionRef={(actionRef) => (this.actionRef = actionRef)}
                rowKey="key"
                manualRequest={false}
                request={(params, sorter, filter) =>
                  query({
                    ...params,
                    locationId: this.state.locationId,
                    productTypeId: this.state.productTypeId,
                  })
                }
                columns={pageFields}
              /> */}

              {/* <Bar onClick={e=>{
                console.log(e);
                debugger;
              }} height={225} data={this.state.bardata} /> */}
              {/* <div className={styles.mapRoot} id="map_root"></div> */}
            </TabPane>
            {/* <TabPane tab="室外" key="2">
            <div className={styles.mapRoot} id="map_inner_root"></div>
            </TabPane> */}
          </Tabs>
        </Col>
        {/* <Col span={24}>
          <Card title="灭火器位置分布">
            <div className={styles.mapRoot} id="map_root">
            </div>
          </Card>
        </Col> */}
      </Row>
    );
  }
}

export default Line3;
