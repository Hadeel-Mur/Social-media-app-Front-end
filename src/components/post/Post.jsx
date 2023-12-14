import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import "./post.scss"
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Comments from '../comments/comments';


function Post({post, onSave}) {

const [comment, setComment] = useState(false)
const [liked, setLiked] = useState()
const [saved, setSaved] = useState()
// Temporary
// const liked = false

// const handleLike =() => {
// setLiked(!liked)
// }

  return (
    <div className='post'>
        <div className='container'>
        <div className='user'>
            <div className='userInfo'>
                <img src={post.profilePic} alt=''/>
                <div className='details'>
                    <Link to={`/profile/${post.userId}`} style={{ textDecoration: 'none', color:'inherit'}}>
                        <span className='name'>{post.name}</span><br></br>
                        <span className='date'>1 min ago</span>
                    </Link>
                </div>
                
            </div>
            <DeleteOutlineIcon fontSize="small" className='delete'/>
        </div>
        <div className='content'>
            <p>{post.desc}</p>
            <img src={post.img} alt=''/>
        </div>
        <div className='actions'>
            <div className='item' onClick={()=> setLiked(!liked)}>
             {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon/>}
            </div>
            <div className='item' onClick={()=> setComment(!comment)}>
             <ModeCommentOutlinedIcon/>
             12 Comments
            </div>
            <div className='item' onClick={()=> setSaved(!saved)}>
             {saved ? <BookmarkAddedIcon/> :  <BookmarkAddedOutlinedIcon/>} 
            </div>
        </div>
        {comment && <Comments/>}
    </div>
    </div>
  )
}

export default Post