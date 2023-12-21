import Image from 'next/image'

export default function Home() {
  return (
    <div className='p-10 text-center'>
      <h1 className='text-xl mb-5'>Create custom model Nextjs with Windwind</h1>
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 p-y-2.5 text-center mr-5'>Text model</button>
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 p-y-2.5 text-center mr-5'>Video model</button>
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 p-y-2.5 text-center mr-5'>Form model</button>
    </div>
  )
}
