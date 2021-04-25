import React, { useContext } from 'react'
import { Row, Col, Button } from 'antd';

import { StateContext } from '../../App'

export const ButtonSet = () => {
  const globalContext = useContext(StateContext)

  const EHApprove = (e) => {
    // console.dir(e.currentTarget)
    // var evObj = document.createEvent('HTMLEvents');
    // evObj.initEvent('approve', bubbling, cancelable);
    // e.dispatchEvent(evObj);
    const event = new CustomEvent('approve')
    console.log('APPROVE clicked ' + event)
    e.currentTarget.dispatchEvent(event)
    // document.addEventListener('approve', alert('Approved'))
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

