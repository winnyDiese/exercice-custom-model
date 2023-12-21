"use client"

import Model from './components/Model'
import { Fragment, useState } from 'react'

export default function Home() {
  const [showModal,setShowModal] = useState(true)
  const [showModal2,setShowModal2] = useState(true)
  const [showModal3,setShowModal3] = useState(true)

  return (
    <div className='p-10 text-center'>
      <Fragment>
        <h1 className='text-xl mb-5'>Create custom model Nextjs with Windwind</h1>
        <button 
          onClick={()=>setShowModal(false)}
          className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'
        >
          Text model
        </button>
        <button 
          onClick={()=>setShowModal2(false)}
          className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'
        >
          Video model
        </button>
        <button 
          onClick={()=>setShowModal3(false)}
          className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'
        >
           Form model
        </button>
        <Model isVisible={showModal} onClose={()=>setShowModal(true)} >
            <div className='p-4'>
                <h3 className='text-xl font-semibold text-gray-900 mb-5'>Model title</h3>
                <div className='text-sm text-left'>
                    <p>lorem ubobo  obyubouybouyboyu    bouybouyb   ouybouy bouybouybo  yubo    yuboyuboy   bouybouybuybiyubbiu ybiuyb  iybiy   ubiyboyouyboubo ybouyboybo  ybouyboyboybo   uybouyboybo yubuoybouyb bo  yubuoybouybyboyboyb bo  uyboybouyb  oybouybouybouyb ouybouybouybo uybouyboybob</p>
                    <br/>
                    <p>lorem ubobo  obyubouybouyboyu    bouybouyb   ouybouy bouybouybo  yubo    yuboyuboy   bouybouybuybiyubbiu ybiuyb  iybiy   ubiyboyouyboubo ybouyboybo  ybouyboyboybo   uybouyboybo yubuoybouyb bo  yubuoybouybyboyboyb bo  uyboybouyb  oybouybouybouyb ouybouybouybo uybouyboybob</p>
                    <br/>
                    <p>lorem ubobo  obyubouybouyboyu    bouybouyb   ouybouy bouybouybo  yubo    yuboyuboy   bouybouybuybiyubbiu ybiuyb  iybiy   ubiyboyouyboubo ybouyboybo  ybouyboyboybo   uybouyboybo yubuoybouyb bo  yubuoybouybyboyboyb bo  uyboybouyb  oybouybouybouyb ouybouybouybo uybouyboybob</p>
                </div>
            </div>
        </Model>

        <Model isVisible={showModal2} onClose={()=>setShowModal2(true)} >
            <iframe width="720" height="405" src="https://www.youtube.com/embed/nwJK-jo91vA" title="Create Custom Modal in React with Tailwind CSS | Modal in NextJS with Tailwind" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Model>
        <Model isVisible={showModal3} onClose={()=>setShowModal3(true)} >Form Model</Model>

      </Fragment>
    </div>
  )
}
