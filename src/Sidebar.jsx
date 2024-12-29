import React from 'react'
import {FaFire,FaPoo,FaPlus} from 'react-icons/fa';
import {FaBoltLightning} from 'react-icons/fa6'

function Sidebar() {
  return (
    <div className='flex flex-col top-0 left-0 h-screen w-16 m-0 
    bg-gray-800 text-white shadow-lg'>
     <SidebarIcon icon={<FaFire size="28"/>}/>
     <SidebarIcon icon={<FaPlus size="28"/>}/>
     <SidebarIcon icon={<FaBoltLightning size="28"/>}/>
     <SidebarIcon icon={<FaPoo size="28"/>}/>
    </div>
  )
}

const SidebarIcon = ({icon, text= "tooltip" })=>(
  <div className='sidebar-icon group'>
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
)


export default Sidebar