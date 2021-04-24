import { List, Card } from 'antd';
import React, { useContext, useEffect } from 'react'
// import { Gstates } from '../../App'
import { StateContext } from '../../App'

// todo from backend api
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

export const FamilyList = () => {
  const countContext = useContext(StateContext)

  // useEffect(() => {
  //   countContext.stateDispatch({ type: 'INCREMENT' })
  // }, [])

  const clickHandler = (e) => {
    console.log(e.currentTarget)
    countContext.stateDispatch({ type: 'NEXT' })
    // CaregiverView()
  }

  return (
    <>
      < List
        grid={{ gutter: 0, column: 1 }}
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