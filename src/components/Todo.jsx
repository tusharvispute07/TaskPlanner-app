import React, {useEffect, useState} from "react";
import Form from "./app/Form";
import Profile from "./app/Profile";
import Item from "./app/Item";
import {fetchTodoList, addToDoItem, deleteToDoItem} from "./appAPIService"
import PageTransition from "./PageTransition";
import Popup from "./app/Popup";
import Quotes from "./app/Quotes";



export default function Todo(){
    const [list, setList] = useState([])
    const [loading, setLoading] =  useState(true)
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null)
    const [isPopupVisible, setPopupVisible] = useState(false)
    const [popupMessage, setPopupMessage] = useState("")
 
    async function fetchData(){
        try{
            const data = await fetchTodoList()
            setList(data.items)
            setUser(data.user)
            setLoading(false)
        }
        catch(err){
            console.log("Error fetching data", err)
            setError(err)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    async function removeChecked(id){
            try{
                await deleteToDoItem(id)
                fetchData();
                setPopupMessage("Item removed successfully")
                setPopupVisible(true)
            }
            catch(err){
                console.log("Error Deleting item",err)
            }  
            
        } 

        

    async function addItem(data){
        try{
            await addToDoItem(data)
            fetchData()
        }
        catch(err){
            console.log("Error adding data", err)
        }
    }

 
    
    return (
        <PageTransition>
        <>
        <Quotes />
        <div className='todo-centered-container'>
        
            <div className="container">
                {loading ? (
                <Profile title="User" />
                ) : (
            <>
                <Profile title={`${user.fname} ${user.lname}`} />
            </>
            )}
                <Form addItem={addItem}/>
                <ul id="item-list">
                {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error.message}</p>
            ) : list && list.length > 0 ? (
              list.map((item) => (
                <PageTransition key={item._id.toString()}>
                    <Item onCheck={removeChecked} id={item._id.toString()} item={item.name} />
                  </PageTransition>
              ))
            ) : (
              <p>Add a new task!</p>
            )}
                </ul>

            </div>
        </div>
        {isPopupVisible && (
          <Popup
            backgroundColor='#333'
            message={popupMessage}
            onClose={() => {
              setPopupVisible(false);
              setPopupMessage("");
            }}
          />
        )}
        </>
        </PageTransition>
        
    )
}