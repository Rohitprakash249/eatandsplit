import React,{useState} from "react";
import Button from "./Button"

function FormSplitBill({onSelectedFriend , onSplitBill}){

    const [billAmt, setBillAmt] = useState(null);

    const [youPaid , setYouPaid] = useState(null);
    
    const [whoIsPaying , setWhoIsPaying] = useState("user");
   //  const hello =  billAmt - youPaid
    const paidByfriend= billAmt-youPaid;
 
     
   //  const [friendExpense , setFriendExpense] = useState();
     function toSetBillAmt(event){
       setBillAmt(Number(event.target.value));
     }
 
     function toSetYouPaid(event){
       setYouPaid(Number(event.target.value));
       // var xexpensive = billAmt - youPaid ; 
       // setFriendExpense(xexpensive);
     }
      
     function handleSubmit(e){
    //    console.log("chalgaya")
       e.preventDefault();
       if(!billAmt || !youPaid) return;
 
       onSplitBill(whoIsPaying === 'user' ? paidByfriend : - youPaid );
 
     }
 
     function handleChangeWhoIsPaying(event){
       setWhoIsPaying(event.target.value)
       console.log(event.target.value)
     }
   return (
     <form className="form-split-bill" onSubmit={handleSubmit}>
       <h2>split a bill with {onSelectedFriend}</h2>
       <label>💸 Bill value</label>
      <input type="text" onChange={toSetBillAmt} />
      <label> 🧑 Your expense</label>
      <input type="text" onChange={toSetYouPaid}/>
      <label> 🫂 X's expense</label>
      <input type="text" disabled value={paidByfriend} />
      <label>💸 who is paying this bill</label>
      <select onChange={handleChangeWhoIsPaying}>
       <option value="user">You</option>
       <option value="friend" >{onSelectedFriend}</option>
      </select>
      <Button >Split Bill</Button>
     </form>
   )
 }

 export default FormSplitBill
 
 