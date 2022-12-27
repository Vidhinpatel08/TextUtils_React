import React from 'react'

export default function Error(props) {
  return (
    <div>
      <h1 className='text-center my-5' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>ERROR PAGE !!!!!</h1>
    </div>
  )
}
