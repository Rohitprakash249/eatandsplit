import React,{useState} from "react";
import Button from "./Button";

function Friend({friend , onSetFriend ,onSelectedFriend }){

    return (<li>
    <img src={friend.image} alt={friend.name}/>
      <h3>{friend.name}</h3>
      {friend.balance===0 && <p> You and {friend.name} are even</p>}
      {friend.balance > 0 && <p className="green">{friend.name} owe you {Math.abs(friend.balance)}  ₹</p>}
      { friend.balance < 0 && <p className="red">You owe {friend.name} {Math.abs(friend.balance)}  ₹</p>}
     
  
  
  
      <Button onClick={()=>onSetFriend(friend)}>
        {friend.name===onSelectedFriend? <p>Close</p> : <p>Select</p>}
       </Button>
      
      </li>
  )}
  
export default Friend;  