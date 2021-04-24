import React from 'react'
import { Row, Col, Button } from 'antd';

export const ButtonSet = () => {
  return (
    <>
      <br></br><br></br>
      <Row type="flex" justify="center" gutter={16}>
        <Col align="middle" span={8}>
          <Button type="danger">Default</Button>
        </Col>
        <Col justify="center" align="middle" span={8}>
          <Button type="primary" >Primary</Button>
        </Col>
      </Row>
    </>
  )
}

