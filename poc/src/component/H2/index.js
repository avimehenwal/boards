import { Typography } from 'antd';
import React from 'react'

const { Text, Title } = Typography;

export const H2 = ({ text, size = 4 }) => {
  return (
    <>
      <Title level={size}>{text}</Title><br></br>
    </>
  )
}