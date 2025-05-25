import { useState, useRef } from "react";
import { useCookies } from "react-cookie";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { SIGN_IN } from "../pages/gql/accounts";

import FormTextField from "../components/FormTextField";
import WideButton from "../components/buttons/WideButton";
import JarTextlogo from './images/JarTextLogo.png'

import "../style/style.css";
import "../style/forms.css";
import "../style/buttons.css";

function SignIn() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const [ signIn, { data, loading, error }] = useMutation(SIGN_IN);

    let signedIn = useRef(false);
     
    const navigate = useNavigate();

    const [ cookies, setCookie ] = useCookies(['session']);

    const setTextFieldInput = (type, value) => {
        if (type === "Email") setEmail(value);
        else setPassword(value);
    }

    if (loading) return <p>Loading...</p>; 
    else if (error) return <p>Error :({JSON.stringify(error, null, 2)}</p>;
     
    /*else if (data != undefined && !signedIn.current) {
        signedIn.current = true;

        setCookie("id", data.signin.id);

        console.log(cookies.id);
    } */
    
    else if (data != undefined && !signedIn.current) {
        signedIn.current = true;

        setCookie("id", data.signin.id);

        navigate('/dashboard');
    } 

    return (
        <div className="page flex col">
              <img src={JarTextlogo} className="imagejar-signin" alt="logo" />
             <form className="form centered" onSubmit={(e) => {
                e.preventDefault()

                signIn({
                    variables: {
                        email: email,
                        password: password
                    }
                }) 
             }}>
                <h2 className="title centered">Sign In</h2>
                <FormTextField label="Email" value={email} setValue={setTextFieldInput} />
                <FormTextField label="Password" value={password} setValue={setTextFieldInput} />
                <input type="submit" className="button centered"/>
             </form>
        </div>
            
    )
}

export default SignIn;