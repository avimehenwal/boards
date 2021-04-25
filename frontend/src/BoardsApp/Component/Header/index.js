import React, { useContext } from 'react'
import { Row, Typography, Tag } from 'antd';
import AppContext from '../../../ContextStore/board-context'
import {
  SET_FOR_POLLING,
} from '../../../ContextStore/board-actions'
const { Text, Title } = Typography;

export const Header = ({ title, text }) => {

  const { appdb, reducerFn } = useContext(AppContext)

  const clickEH = () => reducerFn.dispatchFn({ type: SET_FOR_POLLING })

  return (
    <header onClick={() => clickEH()}>
      <br></br>
      <Row type="flex" align="middle" justify="center">
        <Title level={1}>{title}</Title>
        <br></br>
      </Row>
      <Row type="flex" align="middle" justify="center">
        <Text type="primary">{text} !!!</Text>
      </Row><br></br>
      <Row type="flex" align="middle" justify="center">
        {(appdb.poll) ?
          <Tag color="blue">Marked for polling</Tag> :
          <Tag color="yellow">Not polling</Tag>}
      </Row>
      <br></br>
      <br></br>
    </header >
  )
}