import React, { useState, useEffect } from 'react'
import { DataCard } from '../DataCard'
import { Card, Row, Col } from 'antd';


const BaseContainer = ({ containerTitle, cardStatus, data }) => (
  <Card title={containerTitle}>
    {/* {JSON.stringify(data)} */}
    {data.map(item => (
      <DataCard cardStatus={cardStatus} data={item} key={item.id} />
    ))}
  </Card>
)

const LeftContainer = ({ data }) => (
  <BaseContainer containerTitle="Declined Container" cardStatus="declined" data={data} />
)

const MiddleContainer = ({ data }) => (
  <BaseContainer containerTitle="Unseen Container" cardStatus="unseen" data={data} />
)

const RightContainer = ({ data }) => (
  <BaseContainer containerTitle="Approved Container" cardStatus="approved" data={data} />
)


export const CardContainer = ({ data }) => {
  const [leftList, setLeftList] = useState([])
  const [middleList, setMiddleList] = useState([])
  const [rightList, setRightList] = useState([])

  //  Decide which card should be placed in which board based on cardStatus value
  useEffect(() => {
    let lefts = []
    let middles = []
    let rights = []
    data.map(item => {
      if (item.status === 'unseen') {
        middles.push(item)
      } else if (item.status === 'approved') {
        rights.push(item)
      } else if (item.status === 'declined') {
        lefts.push(item)
      }
    })
    setLeftList(lefts)
    setMiddleList(middles)
    setRightList(rights)

    return () => {
    }
  }, [data])

  return (
    <>
      {/* <pre>{JSON.stringify(leftList, null, 2)}</pre>
      <hr></hr>
      <pre>{JSON.stringify(middleList, null, 2)}</pre>
      <hr></hr>
      <pre>{JSON.stringify(rightList, null, 2)}</pre> */}

      <Row type="flex" justify="center" gutter={20} >
        <Col justify="center" align="middle" span={8}>
          <LeftContainer data={leftList} />
        </Col>

        <Col justify="center" align="middle" span={8}>
          <MiddleContainer data={middleList} />
        </Col>

        <Col justify="center" align="middle" span={8}>
          <RightContainer data={rightList} />
        </Col>
      </Row >
    </>
  )
}

