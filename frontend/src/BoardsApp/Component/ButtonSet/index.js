import React from 'react'
import { Row, Col, Button } from 'antd';

export const ButtonSet = () => {

  const EHApprove = (e) => {
    console.log('APPROVED clicked');
  }

  const EHDecline = (e) => {
    console.log('DECLINE clicked');
  }

  return (
    <>
      <br></br><br></br>
      <Row type="flex" justify="center" gutter={16}>
        <Col align="middle" span={8}>
          <Button type="danger" onClick={EHDecline} >Decline</Button>
        </Col>
        <Col justify="center" align="middle" span={8}>
          <Button type="primary" onClick={EHApprove} >Approve</Button>
        </Col>
      </Row>
    </>
  )
}

