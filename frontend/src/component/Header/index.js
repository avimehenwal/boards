import { Row, Col } from 'antd';
import { Typography } from 'antd';
import React, { useContext } from 'react'
import { CountContext } from '../../App'

const { Text, Title } = Typography;

export const Header = ({ text, stage }) => {
  const countContext = useContext(CountContext)

  return (
    <header onClick={() => countContext.countDispatch({ type: 'RESET' })}>
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