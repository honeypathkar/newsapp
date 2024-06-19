import loading from './images/loading.gif'
import React from 'react'

export default function Spinner() {
  return (
    <div>
      <div className='text-center flex justify-center my-60'>
        <img src={loading} alt='loading' className='w-40'/>
      </div>
    </div>
  )
}
