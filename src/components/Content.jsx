import React from 'react'

function Content(props) {
  return (
    <div style ={{color: props.color}}>{props.candy}</div>
  )
}

export default Content