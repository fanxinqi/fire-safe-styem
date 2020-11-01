import React from 'react';
import { Col, Row, Tabs } from 'antd';
import Card from '@/components/Card/style2';
import styles from './style.less';
const { TabPane } = Tabs;
class Line3 extends React.Component {
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
      // map.enableScrollWheelZoom(true);
      var scaleCtrl = new BMapGL.ScaleControl(); // 添加比例尺控件
      map.addControl(scaleCtrl);
      var zoomCtrl = new BMapGL.ZoomControl(); // 添加比例尺控件
      map.addControl(zoomCtrl);
    }, 1000);
  }

  createInnerMap() {
    console.log('BMapGL', BMapGL);
      // var map = new BMapGL.Map('map_root');
      // console.log('map', map);
      // var point = new BMapGL.Point(116.404, 39.915);
      // map.centerAndZoom(point, 15);
      // // 创建小车图标
      // var myIcon = new BMapGL.Icon('/mark-icon.png', new BMapGL.Size(62, 62));
      // // 创建Marker标注，使用小车图标
      // var pt = new BMapGL.Point(116.417, 39.909);
      // var marker = new BMapGL.Marker(pt, {
      //   icon: myIcon,
      // });
      // // 将标注添加到地图
      // map.addOverlay(marker);
      // // map.enableScrollWheelZoom(true);
      // var scaleCtrl = new BMapGL.ScaleControl(); // 添加比例尺控件
      // map.addControl(scaleCtrl);
      // var zoomCtrl = new BMapGL.ZoomControl(); // 添加比例尺控件
      // map.addControl(zoomCtrl);
  }
  render() {
    return (
      <Row span={24}>
        <Col span={24}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="室内" key="1">
              <div className={styles.mapRoot} id="map_root"></div>
            </TabPane>
            <TabPane tab="室外" key="2">
            <div className={styles.mapRoot} id="map_inner_root"></div>
            </TabPane>
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
