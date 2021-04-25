import React from 'react'
import { CardContainer } from './Component/CardContainer'
import { Header } from './Component/Header'

const items = [
  {
    "status": "unseen",
    "id": "23",
    "name": "Marvin Blanda",
    "city": "East Zena",
    "text": "est qui voluptatem",
    "avatar": "https://cdn.fakercloud.com/avatars/victorstuber_128.jpg"
  },
  {
    "status": "approved",
    "id": "23245",
    "name": "Leticia Frami",
    "city": "South Justinemouth",
    "text": "Odio ut dolores aliquid mollitia. Reiciendis aut sunt voluptates. Natus labore ipsam sint necessitatibus. Tempore voluptatem reprehenderit.",
    "avatar": "https://cdn.fakercloud.com/avatars/fjaguero_128.jpg"
  },
  {
    "status": "declined",
    "id": "333",
    "name": "Seth Ondricka",
    "city": "Maestad",
    "text": "Porro sint adipisci magnam voluptatem soluta quasi delectus aut tempora. Porro mollitia quibusdam sed itaque porro at.",
    "avatar": "https://cdn.fakercloud.com/avatars/tgerken_128.jpg"
  },
  // test transitions
  {
    // "status": "unseen",
    // "status": "declined",
    "status": "approved",

    "id": "4950r",
    "name": "Stuart Beier",
    "text": "Ut omnis corrupti in et.",
    "city": "Tulare",
    "avatar": "https://cdn.fakercloud.com/avatars/dhrubo_128.jpg"
  }
]
export const BoardsApp = () => {
  return (
    <div>
      <Header title="My Board App" text="move around the list" />
      <CardContainer data={items} />
    </div>
  )
}
