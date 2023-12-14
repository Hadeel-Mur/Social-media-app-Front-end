import React from 'react'
import './posts.scss'
import Post from '../post/Post'

function Posts() {


// temporary
const posts = [
  {
    id:1,
    name: "Ghared",
    img: "https://c4.wallpaperflare.com/wallpaper/273/144/23/painting-art-modern-art-acrylic-paint-wallpaper-preview.jpg",
    desc: "I want to share this with u, give me an idea!"
},
  {
      id:2,
      name: "Hadeel",
      img: "https://wallpapers.com/images/featured-small/cute-black-girl-pictures-ityjf6m8v4kiyk9y.webp",
      desc: "Hello there, nice seeing u!"
  },
 
  
]
  return (
    <div className='posts'>
      {posts.map(post => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts