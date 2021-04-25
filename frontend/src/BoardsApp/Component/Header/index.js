import React, { useContext } from 'react'
import { Row, Typography, Tag } from 'antd';
import AppContext from '../../ContextStore/board-context'
const { Text, Title } = Typography;

export const Header = ({ title, text }) => {

  const { appdb, increaseCount } = useContext(AppContext)

  return (
    <header onClick={increaseCount}>
      <br></br>
      <Row type="flex" align="middle" justify="center">
        <Title level={1}>{title}</Title>
        {(appdb.poll) ?
          <Tag color="red">Marked for polling</Tag> :
          <Tag color="blue">Not polling</Tag>}
        <br></br>
      </Row>
      <Row type="flex" align="middle" justify="center">
        <Text type="primary">{text}!!! count from global store context {appdb.count}</Text>
      </Row>

      <br></br>
      <br></br>
    </header >
  )
}