import { useEffect, useState } from "react";
import supabase from "./APIs/supabase";

const SignUp = () => {
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("")
    const [googleSession, setGoogleSession] = useState({})
    const SignUpForm = async () => {
            const {data, error} = await supabase.auth.signUp({
              email: userEmail,
              password: userPassword,      
            }) 
            if(error){
                console.log(error)
            }
    } 
    const SignIn = async () => {
        const {data, error} = await supabase.auth.signInWithPassword({
            email: userEmail,
            password: userPassword
        });
        if(error){
            console.log(error)
        }
        console.log(data);
    }


    const LogOut = async() => {
        const {data, error} = await supabase.auth.signOut()

        console.log(data);
    }

    const SigninWithGoogle = async() => {
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                scopes: 'https://www.googleapis.com/auth/userinfo.email',
                queryParams: {
                  access_type: 'offline',
                  prompt: 'consent',
                },
              },
        })
        if(error){
            console.log(error)
        }
        const {data: {session},} = await supabase.auth.getSession() 
        setGoogleSession(session)        
    }

    useEffect(() => {
        console.log(googleSession)
    }, [googleSession])

    return (
        <>
        <div className="">
            <h2>Sign up</h2>
            <input type="text" name="email" value={userEmail} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" name="password" value={userPassword} onChange={(e) => setPassword(e.target.value)}/>

            <button onClick={() => SignUpForm()}>Submit</button>
        </div>
        <div className="">
            <h2>Sign in</h2>
            <input type="text" name="email" value={userEmail} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" name="password" value={userPassword} onChange={(e) => setPassword(e.target.value)}/>

            <button onClick={() => SignIn()}>Submit</button>
        </div>
        <button onClick={() => LogOut()}>LogOut</button>
        <button onClick={() => SigninWithGoogle()}>Sign in with Google</button>
        </>
    )
}

export default SignUp;