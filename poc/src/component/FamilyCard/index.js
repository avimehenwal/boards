import React, { useContext, useState, useEffect } from 'react'
import { StateContext } from '../../App'
import { getUser } from '../../api'

import { Typography, Card, } from 'antd';
const { Meta } = Card;
const { Text } = Typography;

export const FamilyCard = () => {
  let State = useContext(StateContext)
  const [info, setInfo] = useState()

  useEffect(() => {
    console.log(State.State.id);
    getUser(State.State.id)
      .then(userInfo => {
        setInfo(userInfo)
      })
  }, [State.State.id])

  return (
    <div>
      {(typeof info === 'undefined') ? <p>No Info</p> :
        < Card
          hoverable
          cover={< img alt={info.name} src={info.avatar} />}
        >
          <Meta title={info.name}
            description={info.city}
          />
          <br></br>
          <Text type="secondary">{info.text}</Text>
        </Card >
      }
    </div>
  )
}

