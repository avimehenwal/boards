import { Typography, List, Card, } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { StateContext } from '../../App'
import { getUsers } from '../../api'
const { Meta } = Card;
const { Text, Link } = Typography;

export const FamilyList = () => {
  const [apiData, setApiData] = useState([])
  const countContext = useContext(StateContext)

  useEffect(() => {
    getUsers()
      .then(res => setApiData(res))
    return () => {
      // optimization: save to global context
    }
  }, [])

  // somehow fetch is playing games with me
  // useEffect(() => {
  //   fetch('http://localhost:3010/user')
  //     .then((response) => response.json())
  //     .then((data) => (setTodo(data)))
  //     .catch((error) => console.log(error.message));
  // }, []);

  const clickHandler = (e) => {
    const userId = e.currentTarget.getAttribute("data-user-id")
    console.log(userId)
    // order matters
    countContext.stateDispatch({ type: 'NEXT' })
    countContext.stateDispatch({ type: 'SELECTED_FAMILY', payload: userId })
  }

  return (
    <div>
      {< List
        grid={{ gutter: 50, column: 3 }}
        dataSource={apiData}
        renderItem={item => (
          <List.Item>

            <div data-user-id={item.id} onClick={clickHandler}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt={item.name} src={item.avatar} />}
              >
                <Meta title={item.name}
                  description={item.city}
                />
                <br></br>
                <Text type="secondary">{item.age}</Text>
                {/* <Text type="secondary">{item.text}</Text> */}
              </Card>,
            </div>

          </List.Item >
        )}
      />}
    </div>
  )
}

