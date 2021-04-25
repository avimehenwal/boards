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

export const DataCard = ({ props = defaultProps }) => {
  return (
    <div>
      <Card
        style={{ width: 300 }}
      >
        <Meta
          avatar={<Avatar src={props.src} />}
          title={props.title}
          description={props.desc}
        />
        <ButtonSet cardStatus={props.cardStatus} />
      </Card>,
    </div>
  )
}
