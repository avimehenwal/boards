import { List, Card, Row, Col, Typography, Button } from 'antd';
import React, { useState, useEffect } from 'react'
import { H2 } from '../H2'
import { FamilyCard } from '../FamilyCard'
import { FamilyList } from '../FamilyList'
import { PictureCards } from '../PictureCard'
import { getUsers } from '../../api'

import { StateContext } from '../../App'
const { Text, Title } = Typography;
const { Meta } = Card;

export const BoardList = (props) => {
  return (
    <div>
      <Card title={props.title}>
        {props.children}
      </Card>,
    </div>
  )
}

export const CaregiverList = () => {
  const [caregiverData, setCaregiverData] = useState([])

  useEffect(() => {
    getUsers()
      .then(res => {
        console.dir(res);
        setCaregiverData(res)
      })
  }, [])

  const clickHandler = (e) => {
    console.log(e.currentTarget)
  }

  return (
    <Row type="flex" justify="center" gutter={20} >
      <Col justify="center" align="middle" span={8}>
        <BoardList title="Family">
          <FamilyCard />
        </BoardList>
      </Col>
      <Col justify="center" align="middle" span={8}>
        <BoardList title="Caregivers">
          <PictureCards items={caregiverData} />
        </BoardList>
      </Col>
      <Col justify="center" align="middle" span={8}>
        <BoardList title="Selected">
          <PictureCards items={caregiverData} />
        </BoardList>
      </Col>
    </Row >
  )
}