import React from 'react';
import { Col, Row, Tabs, Select, Drawer, Table } from 'antd';
// import { Bar, Pie } from '../Charts';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';
import ProTable from '@ant-design/pro-table';
import { fields as pageFields, deviceStatus } from './config';
import { query,queryMap} from './service';

import styles from './style.less';
const { TabPane } = Tabs;
class Line3 extends React.Component {
  state = {
    bardata: [],
    productTypeId: 0,
    locationId: 0,
    defaultData: [],
    visible: false,
    item:{},
  };
  componentDidMount() {
    this.actionRef = null;
    const { defaultValue } = this.props;
    this.changeHandle(defaultValue);
    // queryMap({
    //   orgCode:104
    // }).then((res)=>{
    //   console.log(res);
    // })
  }

  createInnerMap(p, t, size, item) {
    var pt = new BMapGL.Point(p, t);
    var myIcon = new BMapGL.Icon('/mark-icon.png', new BMapGL.Size(size || 40, size || 40));
    var marker = new BMapGL.Marker(pt, {
      icon: myIcon,
    });
    marker.addEventListener('click', () => {
      // alert(1);
      console.log(item);
      this.setState({
        item,
        visible:true,
      })
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
      productTypeId: value,
    });
  };

  renderMap() {
    this.map = new BMapGL.Map('map_root');
    // var point = new BMapGL.Point(116.404, 39.915);
    // this.map.centerAndZoom(point, 15);
    // 创建小车图标
    // var myIcon = new BMapGL.Icon('/mark-icon.png', new BMapGL.Size(62, 62));
    // 创建Marker标注，使用小车图标
    // var pt = new BMapGL.Point(116.417, 39.909);
    // var marker = new BMapGL.Marker(pt, {
    //   icon: myIcon,
    // });
    // // 将标注添加到地图
    // this.map.addOverlay(marker);
    // this.map.addOverlay(this.createInnerMap(116.38, 39.92, 60));
    // this.map.addOverlay(this.createInnerMap(116.432, 39.92, 60));

    this.state.defaultData.forEach((item, index) => {
      if (index === 0) {
        var point = new BMapGL.Point(item.longitude, item.latitude);
        this.map.centerAndZoom(point, 15);
      }
      this.map.addOverlay(this.createInnerMap(item.longitude, item.latitude, null, item));
    });

    this.map.enableScrollWheelZoom(true);
    var scaleCtrl = new BMapGL.ScaleControl(); // 添加比例尺控件
    this.map.addControl(scaleCtrl);
    var zoomCtrl = new BMapGL.ZoomControl(); // 添加比例尺控件
    this.map.addControl(zoomCtrl);
  }

  render() {
    const { data, defaultValue } = this.props;
    const {item} = this.state;
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
          <Tabs onChange={this.onChangeHandle} defaultActiveKey="1">
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
                      this.setState(
                        {
                          defaultData: res.data,
                        },
                        this.renderMap,
                      );
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
            </TabPane>
            <TabPane tab="室外地图" key="2">
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="请选址地址"
                // optionFilterProp="children"
                onChange={(value) => {
                  query({
                    locationId: value,
                    productTypeId: this.state.productTypeId,
                  }).then((res) => {
                    this.setState(
                      {
                        defaultData: res.data,
                      },
                      () => {
                        this.renderMap();
                      },
                    );
                  });
                }}
                // onFocus={onFocus}
                // onBlur={onBlur}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {this.state.bardata.map((item) => (
                  <Option value={item.locationId}>{item.x}</Option>
                ))}
              </Select>
              <div className={styles.mapRoot} id="map_root"></div>
            </TabPane>
            {/* <TabPane tab="室内地图" key="3">
              
            </TabPane> */}
          </Tabs>
        </Col>
        <Drawer
          title="设备详情"
          placement="right"
          closable={false}
          onClose={() => {
            this.setState({ visible: false });
          }}
          visible={this.state.visible}
        >
          <p>公司名称：{item.orgName}</p>
          <p>位置：{item.locationName}</p>
          <p>设备类型：{item.productTypeName}</p>
          <p>品牌：{item.brand}</p>
          <p>设备编号：{item.deviceNo}</p>
          <p>型号：{item.deviceModel}</p>
          <p>生产日期：{item.produceDate}</p>
          <p>经纬度:{item.longitude},{item.latitude}</p>
          <p>状态:{deviceStatus[item.checkStatus]}</p>
        </Drawer>
      </Row>
    );
  }
}

export default Line3;
