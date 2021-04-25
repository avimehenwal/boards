import React, { useState, useEffect } from 'react'
import { Card, Typography } from 'antd';
import { ButtonSet } from '../ButtonSet'
const { Meta } = Card;
const { Text } = Typography;

const EHapproved = (e) => {
  console.log(e.currentTarget)
  // document.addEventListener('approve', alert('Approved'))
  // if (e.target.getAttribute('type') === 'button') {
  // }
}


const RestPictureCard = ({ item }) => {
  // useEffect(() => {
  //   document.addEventListener('approve', alert('Approved'))
  //   return () => {
  //     document.removeEventListener('approve', alert('Removed'))
  //   }
  // }, [])

  return (
    <>
      <div data-user-id={item.id} key={item.id} onClick={EHapproved}>
        <Card type="inner" title={item.name} style={{ marginTop: 16 }} >
          <Meta description={item.city} /><br></br>
          <img alt={item.name} src={item.avatar} />
          <br></br><br></br>
          <Text type="secondary">{item.text}</Text>
          <ButtonSet></ButtonSet>
        </Card>
      </div>
    </>
  )
}

const FirstPictureCard = ({ item }) => (
  <>
    <div data-user-id={item.id} key={item.id} onClick={EHapproved}>
      <Card type="inner" title={item.name} >
        <Meta description={item.city} /><br></br>
        <img alt={item.name} src={item.avatar} />
        <br></br><br></br>
        <Text type="secondary">{item.text}</Text>
        <ButtonSet></ButtonSet>
      </Card>
    </div>
  </>
)

// Hide implementation details and provide a generic card component
export const PictureCards = ({ items = [] }) => {
  useEffect(() => {
    // custom event listener
    document.querySelectorAll('div[data-user-id]').forEach(el => {
      console.log('======================');
      console.log(el);
      el.addEventListener('approve', () => alert('Approve'))
    })

    return () => {
      document.querySelectorAll('div[data-user-id]').forEach(el => {
        console.log('======================');
        console.log(el);
        el.removeEventListener('approve', () => alert('Approve'))
      })
    }
  }, [])

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