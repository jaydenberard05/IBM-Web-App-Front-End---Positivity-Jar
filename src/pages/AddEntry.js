import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddEntry({ addJarEntry, setJarEntry }) {
    const [entry, setEntry] = useState("");

    const navigate = useNavigate();

   /* function onChange(event) { 
        var newValue = event.target.value;
    }
        setDetails(newValue); */

        if (addJarEntry) {
            return (
                <>
                    <box className="addjarentry"></box>
                    <h className="addjarentry-formtitle">Vacations Entry</h>
                    <form className="addjarentry-form">               
                    <p>Event</p>
                    <input className="addjarentry-input"></input>
                    <p>Date</p>
                    <input></input>
                    </form>
                </>
           
            )
        }
    }
    
    export default AddEntry;