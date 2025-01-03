import React from 'react'
import useDarkMode from '../hooks/useDarkMode'
import { FaMoon, FaRegBell, FaSearch, FaSun, FaUserCircle } from 'react-icons/fa'
import { FaHashtag } from 'react-icons/fa6'

const TopNavigation = () => {
  return (
    <div className='top-navigation'>
        <HashtagIcon/>
        <Title/>
        <ThemeIcon/>
        <Search/>
        <BellIcon/>
        <UserCircle/>
    </div>
  )
}

const ThemeIcon = ()=>{
    const [darkTheme,setDarkTheme] = useDarkMode();
    const handleMode = ()=> setDarkTheme(!darkTheme)
    return(
        <span onClick={handleMode}>
            {darkTheme?(<FaSun size='24' className='top-navigation-icon'/>)
            :(<FaMoon size='24' className='top-navigation-icon'/>)}
        </span>
    )
}

const Search = ()=>(
    <div className="search">
        <input className='search-input' type="text" placeholder='search...' />
        <FaSearch size='18' className='text-secondary my-auto'/>
    </div>
)

const HashtagIcon = ()=> <FaHashtag size='20' className='title-hashtag'/>
const Title = ()=> <h5 className='title-text'>Tailwind-css</h5>
const BellIcon = ()=> <FaRegBell size='24' className='top-navigation-icon'/>
const UserCircle = ()=> <FaUserCircle size='24' className='top-navigation-icon'/>



export default TopNavigation