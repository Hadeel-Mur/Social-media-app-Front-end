import React, {useContext} from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LogoutIcon from '@mui/icons-material/Logout';
import YoutubeSearchedForOutlinedIcon from '@mui/icons-material/YoutubeSearchedForOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import {Link} from 'react-router-dom'
import './navBar.scss'
import {DarkThemeContext}  from '../context/DarkThemeContext';
import { AuthContext } from '../context/AuthContext';


function NavBar() {

  // it can be either light or dark
   
  const {toggle, theme} = useContext(DarkThemeContext )
  const {currentUser} = useContext(AuthContext)

  return (
  

    
    <div className="navBar">
      {/* <button  >click me</button>
      {console.log(toggle)} */}
      <div className="left">
        <Link to="/" style={{textDecoration: "none"}}>
        <span>Buzzlink</span>
        </Link>
        <div className="search">
          <YoutubeSearchedForOutlinedIcon/>
          <input type="text" placeholder="Search..."/>

        </div>
      </div>
      <div className="right">
       <Link to={'/'} ><HomeOutlinedIcon/></Link>
       {theme ? <NightsStayOutlinedIcon onClick={toggle}/> : <LightModeOutlinedIcon onClick={toggle}/>}
       
       <Link to={'/login/'}><LogoutIcon/></Link>

       <Link to={'/profile/:id'}><Person2OutlinedIcon/></Link>
       <div className="user">
       
       <span>{currentUser.name}</span>
       <img src={currentUser.profilePic} alt=''/>
       </div>
      </div>
    </div>
   
  )
}

export default NavBar