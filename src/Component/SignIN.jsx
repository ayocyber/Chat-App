import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../Firebase";
import { GoogleAuthProvider,signInWithRedirect } from "firebase/auth";




function SignIn(){
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    }
    return(
        <div>
            <GoogleButton onClick={googleSignIn}/>
        </div>
    )
}

export default SignIn