import React from 'react'

export default function Spinner() {
  return (
    <div className='flex flex-col text-white h-screen w-screen justify-center items-center'>
      <div className="spinner"></div>
      <p>Loading....</p>
    </div>
  )
}
