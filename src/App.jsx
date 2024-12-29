import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import TopNavigation from './components/TopNavigation'


function App() {


  return (
    <div className='flex'>
    <Sidebar/>
    <TopNavigation/>
    </div>
  )
}

export default App
