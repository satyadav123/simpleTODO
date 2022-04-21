import { useState } from 'react'
import "./todoItem.css"
const TodoItem = ({getData})=>{
    const [Input,setInput]=useState("")
    
    const addBtn=()=>{
 // setInputarr(...Inputarr,Input)
    // console.log(Inputarr)

    }
   {
       return <div>
     <input placeholder="Enter Item Here" onChange={(e)=>{
      setInput(e.target.value)


     }}/>
     <button className="add_btn" onClick={()=>{
         getData(Input)
        
     }}>ADD</button>

      </div>
    
  
    
   }
    
    }
    export {TodoItem}