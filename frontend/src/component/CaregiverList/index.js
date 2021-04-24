import { List, Card } from 'antd';
import React, { useContext, useEffect } from 'react'
// import { Gstates } from '../../App'
import { CountContext } from '../../App'

// todo from backend api
const data = [
  {
    title: 'Caregiver 1',
  },
  {
    title: 'Caregiver 2',
  },
  {
    title: 'Caregiver 3',
  },
  {
    title: 'Caregiver 4',
  },
];

export const CaregiverList = () => {

  const clickHandler = (e) => {
    console.log(e.currentTarget)
  }

  return (
    <>
      < List
        grid={{ gutter: 15, column: 2 }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card title={item.title} onClick={clickHandler} >
              Card content
            </Card>
          </List.Item >
        )}
      />
    </>
  )
}