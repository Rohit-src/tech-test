import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Button from'@material-ui/core/Button'

const ToDoList = () => {
    const [item,setItem] = useState()
    const [newitem, setNewItem] = useState([]);
    

    const itemEvent=(event)=>{
  setItem(event.target.value);

    }

     const listOfItems=()=>{
         setNewItem((prevValue)=>{
             return[...prevValue,item]
         })
     }

    return (
        <>

        <div className="main-div">
            <div className="centre-div">
              <br/>
              <h1>ToDo List</h1>
              <br/>
              <input type="text" placeholder="add an item" onChange={itemEvent}/>
              <Button className="newBtn" onClick={listOfItems}>
                  <AddIcon/>
              </Button>
              <br/>
              <ol>
                  {newitem.map((val)=>{
                      return <li>{val}</li>
                  })}
              </ol>


                
            </div>
        </div>
            
        </>
    )
}

export default ToDoList
