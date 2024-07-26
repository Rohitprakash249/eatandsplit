import React, {useState} from "react";
import FormSplitBill from "./components/formSplitBill";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import initialFriends from "./components/data";
import Friend from "./components/Friend";
import FriendList from "./components/FriendList";
function App(){

  const [friends,setFriends] =useState(initialFriends);
const [showAddFriend,setShowAddFriend] = useState(false);
const [selectFriend , setSelectFriend] = useState(null);
const [selectedFriend, setSelectedFriend] = useState("");



function handleSplitBill(value){
  console.log(value);
  

  setFriends((friends) => friends.map((friend)=> friend.id === selectedFriend.id ?{
    ...friend , balance: friend.balance + value } : friend
  ));
// setFriends((friends)=> friends.map((friend) => friend.id=== selectedFriend.id ? {...friend,balance: friend.balance +value}
//  : friend));
  // setFriends((friends) => friends.map((friend)=> friend.id === selectedFriend.id ?{
  //   ...friend , balance: friend.balance + value } : friend
  // ));


  // setFriends((friends) => friends.map((friend)=> friend.id === selectedFriend.id ?{
  //   ...friend , balance: friend.balance + value } : friend
  // ));
console.log("array function not working")
}

function toSetFriend(friend){
  setSelectFriend(true);
  setSelectedFriend(friend);
  console.log(selectedFriend);
}

function ftoshowadd(){
  setShowAddFriend((show)=>!showAddFriend);
}
function handleAddFriend(newFriend){
  setFriends((friends)=>[...friends,newFriend]);
  setShowAddFriend(!showAddFriend);
}
  
  
  return (<div className="app">
<div className="sidebar">

  <FriendList friends={friends}
  onSetFriend={toSetFriend}
  onSelectedFriend={selectedFriend.name}
  />
{showAddFriend &&  <FormAddFriend onAddFriend={handleAddFriend}  /> }
{showAddFriend===false &&   <Button onClick={ftoshowadd}>Add a friend</Button> }
  {showAddFriend &&   <Button onClick={ftoshowadd}>Close</Button> }

</div>
{selectFriend===true && <FormSplitBill onSplitBill={handleSplitBill}
 onSelectedFriend={selectedFriend.name}
 
/> };
  </div>)
}




export default App