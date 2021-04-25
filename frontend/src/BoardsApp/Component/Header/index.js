import { Typography } from 'antd';
import React from 'react'
import { Row } from 'antd';
const { Text, Title } = Typography;

export const Header = ({ title, text }) => {
  return (
    <header>
      <br></br>
      <Row type="flex" align="middle" justify="center">
        <Title level={1}>{title}</Title>
        <br></br>
      </Row>
      <Row type="flex" align="middle" justify="center">
        <Text type="primary">{text}</Text>
      </Row>
      <br></br>
      <br></br>
    </header >
  )
}