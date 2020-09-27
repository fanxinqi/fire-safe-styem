import { Card } from 'antd';
import { RightOutlined } from '@ant-design/icons'

const FFCard = (props) => (
  <Card {...props} extra={<RightOutlined />}>
    {props.children}
  </Card>
);

export default FFCard;
