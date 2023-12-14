// FriendContext.js
import React, { createContext, useContext, useState } from 'react';

const FriendContext = createContext();

export function useFriendContext() {
  return useContext(FriendContext);
}

export function FriendProvider({ children }) {
  const [friends, setFriends] = useState([]);
  const [followedFriends, setFollowedFriends] = useState([]);

  const addFriend = (friend) => {
    setFriends((prevFriends) => [...prevFriends, friend]);
  };

  const followFriend = (friend) => {
    setFollowedFriends((prevFollowedFriends) => [...prevFollowedFriends, friend]);
  };

  const unfollowFriend = (friend) => {
    setFollowedFriends((prevFollowedFriends) =>
      prevFollowedFriends.filter((f) => f.id !== friend.id)
    );
  };

  return (
    <FriendContext.Provider
      value={{
        friends,
        followedFriends,
        addFriend,
        followFriend,
        unfollowFriend,
      }}
    >
      {children}
    </FriendContext.Provider>
  );
}
