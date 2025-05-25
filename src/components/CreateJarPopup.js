import { useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import { useCookies } from "react-cookie";

import { CREATE_JAR } from "../pages/gql/Jars";

import FormTextField from "./FormTextField";
import ToggleButton from "./buttons/ToggleButton";

import "../style/popup.css";
import "../style/forms.css";

function CreateJarPopup({ style, refetch }) {
    const [ jarName, setJarName ] = useState("");
    const [ endDate, setEndDate ] = useState("");
    const [ visible, setVisibility ] = useState(false);

    const [ cookies ] = useCookies(['session']);

    var jarCreated = useRef(false);

    const setTextFieldInput = (type, value) => {
        if (type === "Title") setJarName(value);
        else setEndDate(value);
    }

    const [ createJar, { data, loading, error }] = useMutation(CREATE_JAR);

    if (loading) return <p>Loading...</p>; 
    else if (error) return <p>Error :({JSON.stringify(error, null, 2)}</p>;
    else if (data != undefined && !jarCreated.current) {
        jarCreated.current = true;

        console.log(data);
        
        refetch();
    } 

    return (    
        <form className={style} onSubmit={(e) => {
            e.preventDefault();

            createJar({
                variables: {
                    id: cookies.id,
                    title: jarName,
                    endDate: endDate,
                    visibility: visible
                }
            })
         }}>
            <h2 className="title centered">Create Jar</h2>
            <FormTextField label="Title" value={jarName} setValue={setTextFieldInput} />
            <FormTextField label="End Date" value={endDate} setValue={setTextFieldInput} />
            <div className="flex row visibility">
                <p>Visible</p>
                <ToggleButton buttonState={visible} setButtonState={setVisibility} />
            </div>
            <input type="submit" className="button centered submit"/>
         </form>
    )
}

export default CreateJarPopup;