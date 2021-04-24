import { Row, Col } from 'antd';
import { Typography } from 'antd';
import React from 'react'

const { Text, Title } = Typography;

export const Header = ({ text, stage }) => {
  // const Gstage = useContext(Gstates)

  return (
    <header>
      <Row type="flex" align="middle" justify="center">
        <Title level={1}>{text}</Title>
        <br></br>
      </Row>
      <Row type="flex" align="middle" justify="center">
        <Text type="secondary">Current stage {stage}</Text>
      </Row>
    </header >

  )
}