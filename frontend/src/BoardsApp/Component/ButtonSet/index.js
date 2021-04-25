import React from 'react'
import { Row, Col, Button } from 'antd';

export const ButtonSet = ({ cardStatus = 'unseen', id = 0 }) => {

  const EHApprove = (e) => {
    console.log('APPROVED clicked ID ' + id);
  }

  const EHDecline = (e) => {
    console.log('DECLINE clicked ' + id);
  }

  return (
    <>
      <br></br>
      <Row type="flex" justify="center" gutter={16}>
        <Col align="middle" span={8}>
          <Button type="danger" onClick={EHDecline}
            disabled={(cardStatus === 'declined') ? true : false}
          >
            Decline
          </Button>
        </Col>
        <Col justify="center" align="middle" span={8}>
          <Button type="primary" onClick={EHApprove}
            disabled={(cardStatus === 'approved') ? true : false}
          >
            Approve
          </Button>
        </Col>
      </Row>
    </>
  )
}

