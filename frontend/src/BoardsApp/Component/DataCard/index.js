import { ButtonSet } from "../ButtonSet";
import React from 'react'
import { Card, Avatar } from 'antd';

const { Meta } = Card;

const defaultProps = {
  cardStatus: 'unseen',
  // cardStatus: 'declined',
  // cardStatus: 'approved',
  title: "Card title",
  desc: "This is the description",
  src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
}

export const DataCard = ({ cardStatus, data }) => {
  return (
    <div>
      <Card
      // style={{ width: 200 }}
      >
        <Meta
          avatar={<Avatar src={data.avatar} />}
          title={data.name}
          description={data.city}
        // description={data.text}
        />
        <ButtonSet cardStatus={cardStatus} id={data.id} />
      </Card>,
    </div>
  )
}
