import React from 'react';
import { useFriendContext } from '../../components/context/FriendContext';
import './friends.scss'

function FriendsPage() {
  const { followedFriends } = useFriendContext();
  

  return (
    <div className="friends">
      <h1>Your Followed Friends</h1>
      <ul>
        {followedFriends.map((friend) => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FriendsPage;
