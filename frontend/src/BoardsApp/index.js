import React, { useEffect, useState, useRef } from 'react'
import { getBoardData } from './apis'
import { Header } from './Component/Header'
import { AppState } from './ContextStore/BoardState'
import { CardContainer } from './Component/CardContainer'

export const BoardsApp = () => {
  const [jsonData, setJsonData] = useState([])

  useEffect(() => {
    getBoardData()
      .then(res => {
        setJsonData(res)
      })
    return () => { }
  }, [])


  return (
    <div>
      <AppState>
        <Header title="My Board App" text="move around the list" />
        <CardContainer data={jsonData} />
      </AppState>
    </div>
  )
}
