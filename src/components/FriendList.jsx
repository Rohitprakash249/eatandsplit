import React from "react";
import Friend from "./Friend";
function FriendList({friends , onSetFriend , onSelectedFriend}){


    return (<ul>
    {friends.map((friend)=>(<Friend
      friend ={friend} key = {friend.id} onSetFriend={onSetFriend} onSelectedFriend={onSelectedFriend}  />
    ))}
    </ul>);
    }
    
export default FriendList    