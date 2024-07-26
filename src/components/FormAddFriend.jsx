import React,{useState} from "react";
import Button from "./Button";

function FormAddFriend({onAddFriend}){
    const [name , setName] =  useState();
    const [image,setImage] = useState("https://picsum.photos/50");
    function handleName(event){
      setName(event.target.value)
      // console.log(event.target.value)
    }

    function handleImage(event){
      setImage(event.target.value);
      // console.log(event.target.value);
    }




function handleSubmit(event ){
  event.preventDefault();
  if(!name || !image) return;
  const id = crypto.randomUUID();
  const newFriend = {
    id,
    name,
    image,
    balance: 0
  };
  console.log(newFriend);
  onAddFriend(newFriend);
setImage('');
setName('');
}
  return <form className="form-add-friend" onSubmit={handleSubmit}>
     <label>🫂Friend Name</label>
     <input type="text" onChange={handleName} />
     <label>  Image URL</label>
     <input type="text" onChange={handleImage}/>


<Button >Add</Button>
  </form>
}
export default FormAddFriend