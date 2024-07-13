import React from "react";
import { auth } from "../Firebase";
import "./Index.css"



function Message({message , name, uid}){
    const messageClass =  uid === auth.currentUser.uid ? "sent" : "received"

    return(
        <div>
                <div className={`message ${messageClass}`}>
                <p className="name">{name}</p>
                <p>{message}</p> 
            </div>
        </div>
    )
}

export default Message