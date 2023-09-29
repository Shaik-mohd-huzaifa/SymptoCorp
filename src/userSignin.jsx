import { useState } from "react";
import supabase from "./APIs/supabase";

const SignUp = () => {
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("")
    const SignUpForm = async () => {
      const {data, error} = await supabase.auth.signUp({
        email: userEmail,
        password: userPassword,   
        disable_email_confirmations: true,      
      })  
      console.log(data || error)
    } 

    const SignIn = async () => {
        const {data, error} = await supabase.auth.signInWithPassword({
            email: userEmail,
            password: userPassword
        });
        console.log(data || error);
    }

    return (
        <div className="">
            <input type="text" name="email" value={userEmail} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" name="password" value={userPassword} onChange={(e) => setPassword(e.target.value)}/>

            <button onClick={() => SignUpForm()}>Submit</button>
        </div>
    )
}

export default SignUp;