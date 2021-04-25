import React, { useEffect, useState, useRef } from 'react'
import { getBoardData } from './apis'
import { Header } from './Component/Header'
import { CardContainer } from './Component/CardContainer'
// import { useInterval } from './customHook'

export const BoardsApp = () => {
  const [jsonData, setJsonData] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every second!');
      getBoardData()
        .then(res => {
          setJsonData(res)
        })
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // useInterval(async () => {
  //   getBoardData()
  //     .then(res => {
  //       setJsonData(res)
  //     })
  // }, 3000)

  return (
    <>
      <Header title="My Board App" text="move around the list" />
      <CardContainer data={jsonData} />
    </>
  )
}
