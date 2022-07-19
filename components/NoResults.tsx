import React from 'react'

interface IProps {
    text:string;
}
//simpler way with types
const NoResults = ({ text }: IProps) => {
  return (
    <div>NoResults</div>
  )
}

export default NoResults