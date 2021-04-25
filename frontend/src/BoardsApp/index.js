import { CardContainer } from './Component/CardContainer'

import React from 'react'

const items = [
  {
    "id": "23",
    "name": "Marvin Blanda",
    "status": "unseen",
    "city": "East Zena",
    "text": "est qui voluptatem",
    "avatar": "https://cdn.fakercloud.com/avatars/victorstuber_128.jpg"
  },
  {
    "id": "23245",
    "name": "Leticia Frami",
    "status": "approved",
    "city": "South Justinemouth",
    "text": "Odio ut dolores aliquid mollitia. Reiciendis aut sunt voluptates. Natus labore ipsam sint necessitatibus. Tempore voluptatem reprehenderit.",
    "avatar": "https://cdn.fakercloud.com/avatars/fjaguero_128.jpg"
  },
  {
    "id": "333",
    "name": "Seth Ondricka",
    "status": "declined",
    "city": "Maestad",
    "text": "Porro sint adipisci magnam voluptatem soluta quasi delectus aut tempora. Porro mollitia quibusdam sed itaque porro at.",
    "avatar": "https://cdn.fakercloud.com/avatars/tgerken_128.jpg"
  },
  {
    "id": "4950r",
    "name": "Stuart Beier",
    "status": "declined",
    "text": "Ut omnis corrupti in et.",
    "city": "Tulare",
    "avatar": "https://cdn.fakercloud.com/avatars/dhrubo_128.jpg"
  }
]
export const BoardsApp = () => {
  return (
    <div>
      <CardContainer data={items} />
    </div>
  )
}
