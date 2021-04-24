import React, { useState } from 'react'
import { Card, Typography } from 'antd';
import { ButtonSet } from '../ButtonSet'
const { Meta } = Card;
const { Text } = Typography;

const RestPictureCard = ({ item }) => (
  <>
    <Card type="inner" title={item.name} style={{ marginTop: 16 }} >
      <Meta description={item.city} /><br></br>
      <img alt={item.name} src={item.avatar} />
      <br></br><br></br>
      <Text type="secondary">{item.text}</Text>
      <ButtonSet></ButtonSet>
    </Card>
  </>
)

const FirstPictureCard = ({ item }) => (
  <>
    <Card type="inner" title={item.name} >
      <Meta description={item.city} /><br></br>
      <img alt={item.name} src={item.avatar} />
      <br></br><br></br>
      <Text type="secondary">{item.text}</Text>
      <ButtonSet></ButtonSet>
    </Card>
  </>
)

// Hide implementation details and provide a generic card component
export const PictureCards = ({ items = [] }) => {
  return (
    <>
      {(items.length === 0) ?
        <>
          <p>Now Loading</p> {console.log('LOADING')}
        </> :
        <>
          <FirstPictureCard item={items[0]} />
          {items.slice(1).map(item => <RestPictureCard item={item} />)}
        </>
      }
    </>
  )
}