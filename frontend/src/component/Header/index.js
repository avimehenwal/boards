import { Row, Col } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

export const Header = (props) => (
  <header>
    <Row type="flex" align="middle" justify="center">
      <Title level={1}>{props.text}</Title>
    </Row>
  </header>

)