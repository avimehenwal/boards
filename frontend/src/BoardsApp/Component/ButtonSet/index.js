import React from 'react'
import { Row, Col, Button } from 'antd';
import { postStatusChange } from '../../apis'

export const ButtonSet = ({ cardStatus, id = 0 }) => {

  const EHApprove = async (e) => {
    let status = await postStatusChange(id, { status: cardStatus.nextStatus })
    console.log(`APPROVED clicked ID ${id} next ${cardStatus.nextStatus} status ${status}`);
  }

  const EHDecline = async (e) => {
    let status = await postStatusChange(id, { status: cardStatus.prevStatus })
    console.log(`DECLINED clicked ID ${id} next ${cardStatus.prevStatus} status ${status}`);
  }

  return (
    <>
      <br></br>
      <Row type="flex" justify="center" gutter={16}>
        <Col align="middle" span={8}>
          <Button type="danger" onClick={EHDecline}
            disabled={(cardStatus.currentStatus === 'declined') ? true : false}
          >
            Decline
          </Button>
        </Col>
        <Col justify="center" align="middle" span={8}>
          <Button type="primary" onClick={EHApprove}
            disabled={(cardStatus.currentStatus === 'approved') ? true : false}
          >
            Approve
          </Button>
        </Col>
      </Row>
    </>
  )
}

