import { Row } from 'antd';
import { Typography, Button } from 'antd';
import React, { useContext, useEffect, useRef } from 'react'
import { StateContext } from '../../App'

const { Text, Title } = Typography;

export const Header = ({ text, stage }) => {
  const countContext = useContext(StateContext)
  const ref1 = useRef(null)

  useEffect(() => {
    // custom event listener
    console.log('======================');
    ref1.current.addEventListener('approve', () => alert('Approve'))

    return () => {
      console.log('======================');
      ref1.current.removeEventListener('approve', () => alert('Approve'))
    }
  }, [ref1])

  const EHApprove = () => {
    const newEvent = new CustomEvent('approve')
    ref1.current.dispatchEvent(newEvent)
  }

  return (
    <header onClick={() => countContext.stateDispatch({ type: 'RESET' })}>
      <Row type="flex" align="middle" justify="center">
        <Title level={1}>{text}</Title>
        <br></br>
      </Row>
      <Row type="flex" align="middle" justify="center">
        <Text type="secondary">Current stage {stage}</Text>
      </Row>

      <Button ref={ref1} onClick={EHApprove} >Custom Event</Button>

    </header >
  )
}