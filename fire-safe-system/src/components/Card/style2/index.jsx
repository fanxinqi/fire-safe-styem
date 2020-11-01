import { useState } from 'react';
import { Card, Radio } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const FFCard = (props) => {
  const { innerValue, setInnerValue } = useState(1);
  const {
    tabs = [
      {
        value: 1,
        name: 'span1',
        span: <div> span1 </div>,
      },
      {
        value: 2,
        name: 'span2',
        span: <div> span2 </div>,
      },
    ],
  } = props;

  const findTab = () => tabs.find((item) => item.value == innerValue);
  const renderTab = () => {
    const tab = findTab();
    let el = null;
    if (tab && tab.span) {
      el = tab.span;
    }
    return el;
  };
  const onChange = (e) => {
    setInnerValue(e.target.value);
  };
  return (
    <Card
      {...props}
      extra={
        <Radio.Group value={innerValue} onChange={(e)=>onChange(e)}>
          {tabs.map((item) => (
            <Radio.Button key={item.value} value={item.value}>{item.name}</Radio.Button>
          ))}
        </Radio.Group>
      }
    >
      {renderTab()}
      {props.children}
    </Card>
  );
};

export default FFCard;
