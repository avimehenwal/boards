import { List, Card } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { StateContext } from '../../App'
import { getUsers, getList } from '../../api'

export const FamilyList = () => {
  const [apiData, setApiData] = useState([])
  const countContext = useContext(StateContext)

  useEffect(() => {
    getUsers()
      .then(res => setApiData(res))
    return () => { }
  }, [])

  // somehow fetch is playing games with me
  // useEffect(() => {
  //   fetch('http://localhost:3010/user')
  //     .then((response) => response.json())
  //     .then((data) => (setTodo(data)))
  //     .catch((error) => console.log(error.message));
  // }, []);

  const clickHandler = (e) => {
    console.log(e.currentTarget)
    // order matters
    countContext.stateDispatch({ type: 'NEXT' })
    countContext.stateDispatch({ type: 'SELECTED_FAMILY', payload: e.currentTarget.innerText })
  }

  return (
    <div>
      {< List
        grid={{ gutter: 0, column: 1 }}
        dataSource={apiData}
        renderItem={item => (
          <List.Item>
            <Card title={item.name} onClick={clickHandler} >

              <p>{item.age}</p>
              <p>{item.city}</p>
            </Card>
          </List.Item >
        )}
      />}
    </div>
  )
}

