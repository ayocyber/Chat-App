import React from "react";
import { auth, db } from "../Firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const style = {
    form : `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0 `,
    input : `w-full text-xl p-3 bg-gray-900 text-white outline-none boder-none`,
    button : `w-[20%] bg-green-500`
}



function SendMessage({scroll}){
    const [input , setInput] = React.useState("")

    const sendmessage = async(e) =>{
        e.preventDefault()
        if(input === ""){
            alert("please enter a valid message")
            return
        }
        const {uid , displayName} = auth.currentUser
        await addDoc(collection(db, "messages"),{
           text : input,
           name : displayName,
           uid : uid,
           timestamp: serverTimestamp()
        })
        setInput("")
        scroll.current.scrollIntoView({behaviour: "smooth"})
    }
    return(
       
        <form className={style.form} onSubmit={sendmessage}>
             
            <input 
            type="text" 
            placeholder="Message" 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            className={style.input}
            />
            <button type="submit" className={style.button}>Send</button>
        </form>
    )
}

export default SendMessage 