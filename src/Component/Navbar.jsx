import React from "react";
import { auth } from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIN";
import Logout from "./Logout";


const style = {
    nav : "bg-gray-800 h-20 flex justify-between item-center p-4",
    heading : `text-white text-3xl `
}
function Navbar(){
  const [user] = useAuthState(auth)
  console.log(user)
    return(
        <div className={style.nav}>
            <h1 className={style.heading}>Chat App</h1>
            {user ? <Logout/> : <SignIn/>}
        </div>
    )
}

export default Navbar