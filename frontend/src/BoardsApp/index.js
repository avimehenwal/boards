import React, { useEffect, useState } from 'react'
import { Header } from './Component/Header'
import { CardContainer } from './Component/CardContainer'
import { getBoardData } from './apis'

export const BoardsApp = () => {
  const [jsonData, setJsonData] = useState([])
  // server push or Polling?
  // const [pollingInterval, setPollingInterval] = useState(3)

  useEffect(() => {
    getBoardData()
      .then(res => {
        setJsonData(res)
      })
    return () => { }
  }, [])

  return (
    <div>
      <Header title="My Board App" text="move around the list" />
      <CardContainer data={jsonData} />
    </div>
  )
}
