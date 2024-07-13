import React from "react";
import Navbar from "./Navbar";
import { auth } from "../Firebase";
import {useAuthState} from "react-firebase-hooks/auth"
import Chat from "./Chat";
const style ={
    appcontainer : "max-w-[728px] mx-auto text-center",
    sectionContainer : "flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl boder relative "

}
function Chatapp(){
    const [user] = useAuthState(auth)
    console.log(user)
    return(  
        <div className={style.appcontainer}>
            <section className={style.sectionContainer}>
                <Navbar/>
                {user ? <Chat/> : "null"}
            </section>
        </div>
    )
}

export default Chatapp