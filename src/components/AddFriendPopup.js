import { useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import { useCookies } from "react-cookie";

import { ADD_FRIEND } from "../pages/gql/friends.js";

import FormTextField from "./FormTextField";

import "../style/popup.css";
import "../style/forms.css";

function AddFriendPopup({ style, refetch }) {
    const [ addFriendUsername, setAddFriendUsername ] = useState("");

    const [ cookies ] = useCookies(['session']);

    var friendAdded = useRef(false);

    const setTextFieldInput = (type, value) => {
        setAddFriendUsername(value);
    }

    const [ addFriend, { data, loading, error }] = useMutation(ADD_FRIEND);

    if (loading) return <p>Loading...</p>; 
    else if (error) return <p>Error :({JSON.stringify(error, null, 2)}</p>;
    else if (data != undefined && !friendAdded.current) {
        friendAdded.current = true;

        console.log(data);
        
        refetch();
    } 

    return (    
        <form className={style} onSubmit={(e) => {
            e.preventDefault();

            addFriend({
                variables: {
                    id: cookies.id,
                    friendUsername: addFriendUsername
                }
            })
         }}>
            <h2 className="title centered">Add Friend</h2>
            <FormTextField label="Username" value={addFriendUsername} setValue={setTextFieldInput} />
            <input type="submit" className="button centered submit"/>
         </form>
    )
}

export default AddFriendPopup;