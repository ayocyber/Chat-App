import React from "react";
import Message from "./Message";
import { db } from "../Firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import SendMessage from "./SendMessage";
const style ={
    main :`flex-column p-[10px] relative`
}

function Chat(){
    const scroll = React.useRef()
    const [messages , setMessage] = React.useState([])

    React.useEffect(()=>{
        const q = query(collection(db, "messages"),orderBy("timestamp"))
        const unsubscribe = onSnapshot(q, (querySnapshot)=>{
            let messages = []
            querySnapshot.forEach((doc)=>{
                messages.push({...doc.data(), id: doc.id})
            })
            setMessage(messages)
        })
        return ()=> unsubscribe()
    },[])
    console.log("hello world")
    return(
        <>
        <main className={style.main}>
            {
                messages && messages.map((message)=>{
                    return(
                    <Message  key={message.id} message={message.text} name={message.name} uid={message.uid}/>
                    )
                })
            }
        </main>
        <SendMessage scroll={scroll}/>
        <span ref={scroll}></span>
        </>
    )
}

export default Chat