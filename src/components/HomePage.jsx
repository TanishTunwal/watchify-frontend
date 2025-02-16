import React, { useState } from 'react'
import SideBar from './SideBar'
import HomeSkeleton from '../skeleton/HomeSkeleton'

function HomePage() {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div className="bg-black">
        <div className='flex'>
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
            <HomeSkeleton />
        </div>
    </div>
  )
}

export default HomePage