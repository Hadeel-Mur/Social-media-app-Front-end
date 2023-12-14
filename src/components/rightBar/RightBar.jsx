import "./rightBar.scss"
import React from 'react'
import { useFriendContext } from "../context/FriendContext"


function RightBar() {

const { friends, followFriend, unfollowFriend } = useFriendContext();


  return (
   <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Friends Suggestions</span>


          <div className="user">
            <div className="userInfo">
            <img src='https://www.houseofwellness.com.au/wp-content/uploads/2023/01/vanilla-girl-make-up.jpg'
             alt="profile pic" className="image"/>
            <span>Hadeel murshed</span>
            </div>
            <div className="buttons">
            <button onClick={() => followFriend(friends)} >Follow</button>
            
            <button onClick={() => unfollowFriend(friends)}>Unfollow</button>
          </div>

          
          
        </div>


        </div>

        <div className="item">
          <span>Active Friends</span>
          <div className="user">
            <div className="userInfo">
            <img src="https://www.houseofwellness.com.au/wp-content/uploads/2023/01/vanilla-girl-make-up.jpg" alt="profile pic" />
            <div className="online"/>
            <span>Hadeel murshed</span>
            </div>
        </div>

        <div className="user">
            <div className="userInfo">
            <img src="https://www.houseofwellness.com.au/wp-content/uploads/2023/01/vanilla-girl-make-up.jpg" alt="profile pic" />
            <div className="online"/>
            <span>Hadeel</span>
            </div>
        </div>

      </div>
      
      </div>
    </div>
  )
}

export default RightBar