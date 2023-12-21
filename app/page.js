"use client"

import Model from './components/Model'
import { Fragment, useState } from 'react'

export default function Home() {
  const [showModal,setShowModal] = useState(false)
  return (
    <div className='p-10 text-center'>
      <Fragment>
        <h1 className='text-xl mb-5'>Create custom model Nextjs with Windwind</h1>
        <button 
          onClick={()=>setShowModal(true)}
          className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'
        >
          Text model
        </button>
        <button 
          className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'
        >
          Video model
        </button>
        <button 
          className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'
        >
           Form model
        </button>
        <Model isVisible={showModal} onClosse={()=>setShowModal(false)} />
      </Fragment>
    </div>
  )
}
