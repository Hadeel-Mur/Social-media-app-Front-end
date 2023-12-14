import "./leftBar.scss"
import React, {useContext} from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import SlowMotionVideoOutlinedIcon from '@mui/icons-material/SlowMotionVideoOutlined';
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { AuthContext } from "../context/AuthContext";
import {Link} from 'react-router-dom';

function LeftBar() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">

            <Link to={'/profile/:id'} className="link">
            <AccountCircleOutlinedIcon/>
            <span>{currentUser.name}</span>
            </Link>
          
          </div>
          <div className="item">
            <Link to={'/friends/'} className="link">
            <Diversity1OutlinedIcon/>
            <span>Friends</span>
            </Link>
          
          </div>
          <div className="item">
            <Link to={'/gif/'} className="link">
            <SlowMotionVideoOutlinedIcon/>
            <span>GIFs</span>
            </Link>
            </div>
           <div className="item">
            <Link to={'/movies/'} className="link">
            <LocalMoviesOutlinedIcon/>
            <span>Movies</span>
            </Link>
          
          </div>
          <div className="item">
            <Link to={'/saved/'} className="link">
            <BookmarkAddedIcon/>
            <span>Saved</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar