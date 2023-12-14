import React, { useContext} from 'react'
import './comments.scss'
import {AuthContext} from "../context/AuthContext"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function Comments() {

const {currentUser} = useContext(AuthContext)

// temporary
const comments = [
    {
        id:1,
        userId: 1,
        name: "Hadeel",
        img: "https://wallpapers.com/images/featured-small/cute-black-girl-pictures-ityjf6m8v4kiyk9y.webp",
        desc: "LoytgyjhjybhcksjHNJHVKUSHENz  egrcawblncxa yrlnawxxan.fur.alge egrcawblncxa yrlnawxxan.fur.alge egrcawblncxa yrlnawxxan.fur.alge"
    },
    {
        id:2,
        userId: 2,
        name: "Ghared",
        img: "https://wallpapers.com/images/featured-small/cute-black-girl-pictures-ityjf6m8v4kiyk9y.webp",
        desc: "LoytgyjhjybhcksjHNJHVKUSHENz  egrcawblncxa yrlnawxxan.fur.alge"
    },
    
  ]
  return (
    <div className='comments'>
        <div className='write'>
       <img src={currentUser.profilePic} alt=''/>
       <input type='text' placeholder='write a comment'/>
       <button>Post</button>
        </div>
       {comments.map(comment => (
        <div className='comment'>
         <img src={currentUser.profilePic} alt=''/>
         <div className='info'>
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
         </div>
         <span className='date'>1 hour ago</span>
         <DeleteOutlineIcon fontSize="smaller" className='delete'/>
        </div>
    ))}
    </div>
  )
}

export default Comments