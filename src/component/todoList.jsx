import { useState } from 'react'
import './todoList.css'
import {TodoItem} from './todoItem'
import {nanoid}  from 'nanoid'
const TodoList = ()=>{
    const [Inputarr,setInputarr]=useState([])
 
    const getData=(todo)=>{
        const payload={
            title:todo,
            status:false,
            id:nanoid(5),
           
        }
        console.log(Inputarr)
        setInputarr([...Inputarr,payload])
    }
    const toggle=(id)=>{
       
        setInputarr([...Inputarr.map(e =>e.id===id ? { ...e,status:!e.status}:e)])

    }
    const del=(index)=>{
        console.log(index)
       Inputarr.splice(index,1)
       setInputarr([...Inputarr])

    }
   {
       return <div>
        <TodoItem getData={getData}/>
        <div className="list">
       {
        
       Inputarr.map((e,index)=>(
        
              <div className="item"><button onClick={()=>del({index})}>Remove</button>{e.title} -{e.status ? "done":"not done"}
              <button onClick={()=>toggle(e.id)}>toggle</button></div>     ))
              }
   </div>
      </div>
    
  
    
   }
    
    }
    export {TodoList}