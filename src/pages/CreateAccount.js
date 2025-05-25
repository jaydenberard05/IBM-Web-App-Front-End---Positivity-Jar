import { useState, useRef } from "react";
import { useCookies } from "react-cookie";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';

import { CREATE_ACCOUNT } from "./gql/accounts";

import FormTextField from "../components/FormTextField";
import JarTextlogo from './images/JarTextLogo.png'

import "../style/style.css";
import "../style/forms.css";

function CreateAccount() {
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");

    const [ createAccount, { data, loading, error }] = useMutation(CREATE_ACCOUNT);

    let accountCreated = useRef(false);
     
    const navigate = useNavigate();

    const [ cookies, setCookie ] = useCookies(['session']);

    const setTextFieldInput = (type, value) => {
        switch (type) {
            case "Username": setUsername(value); break;
            case "Email": setEmail(value); break;
            case "Phone": setPhone(value); break;
            case "Password": setPassword(value); break;
            default: setConfirmPassword(value); break;
        }
    }

    if (loading) return <p>Loading...</p>; 
    else if (error) return <p>Error :({JSON.stringify(error, null, 2)}</p>;
    else if (data != undefined && !accountCreated.current) {
        accountCreated.current = true;

        setCookie("session", data.signIn.id);

        navigate('/sign-in');
    } 

    return (
        <div className="page flex col">
              <img src={JarTextlogo} className="imagejar-signin" alt="logo" />
              <form className="form centered create-account" onSubmit={(e) => {
                e.preventDefault()

                createAccount({
                    variables: {
                        username: username,
                        email: email,
                        phone: phone,
                        password: password
                    }
                })
             }}>
                <h2 className="title centered">Create Account</h2>
                <FormTextField label="Username" value={username} setValue={setTextFieldInput} />
                <FormTextField label="Email" value={email} setValue={setTextFieldInput} />
                <FormTextField label="Phone" value={phone} setValue={setTextFieldInput} />
                <FormTextField label="Password" value={password} setValue={setTextFieldInput} />
                <FormTextField label="Confirm Password" value={confirmPassword} setValue={setTextFieldInput} />
                <NavLink to="/dashboard"><input className="wide button centered" type="submit"/></NavLink>
             </form>
        </div>
            
    )
}

export default CreateAccount;