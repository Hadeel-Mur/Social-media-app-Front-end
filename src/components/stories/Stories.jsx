import React, { useContext } from 'react'
import './stories.scss'
import {AuthContext} from "../context/AuthContext"

function Stories() {

const {currentUser} = useContext(AuthContext)

// temporary
const stories = [
    {
        id:1,
        name: "Hadeel",
        img: "https://wallpapers.com/images/featured-small/cute-black-girl-pictures-ityjf6m8v4kiyk9y.webp"
    },
    {
        id:2,
        name: "Ghared",
        img: "https://wallpapers.com/images/featured-small/cute-black-girl-pictures-ityjf6m8v4kiyk9y.webp"
    },
    {
        id:3,
        name: "Tito",
        img: "https://wallpapers.com/images/featured-small/cute-black-girl-pictures-ityjf6m8v4kiyk9y.webp"
    },
    {
        id:4,
        name: "Loool",
        img: "https://wallpapers.com/images/featured-small/cute-black-girl-pictures-ityjf6m8v4kiyk9y.webp"
    },
]
  return (
    <div className="stories">
        <div className="story">
           <img src={currentUser.profilePic} alt=''/>
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
      {stories.map(story => (
        <div className="story" key={story.id}>
          <img src={story.img} alt=""/>
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories