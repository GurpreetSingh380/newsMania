import React from 'react'
import Loading from './Loading'
export default function Api() {
  return (
    <div className='container my-3' style={{color: 'coral',fontFamily: 'cursive', fontWeight: 'bolder', fontSize: '40px'}}>
        OOPS! API EXHAUSTED
        <Loading/> 
    </div>
  )
}
