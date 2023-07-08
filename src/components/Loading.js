import React from 'react'
import load from '../load.gif'

export default function Loading() {
  return (
    <div>
      <div className='text-center d-flex justify-content-center align-content-center' style={{height: '20vh'}}>
        <img style={{margin: '30px 0px'}} src={load} alt="loading" />
      </div>
    </div>
  )
}
