import { useNavigate } from "react-router-dom";
import { useState } from "react";
import  AddEntry  from "./AddEntry"
import  EntrySelect from "./EntrySelect"
import  FriendsSelect from "./FriendsSelect"
import SettingsSelect from "./SettingsSelect";

function JarDetailsPopup({ popupOpenJar, setPopupStateJar }) {
    const [details, setDetails] = useState("");
    const [newEntryPopup, setNewEntryPopup] = useState(false)
    const [newFriendsPopup, setNewFriendsPopup] = useState(false)
    const [newSettingsPopup, setNewSettingsPopup] = useState(false)

    const navigate = useNavigate();


    function toggleNewEntry() {
        setNewEntryPopup(!newEntryPopup);
        } 

    function toggleNewFriends() {
        setNewFriendsPopup(!newFriendsPopup);
    }   
    function toggleNewSettings() {
        setNewSettingsPopup(!newSettingsPopup)
    }



    function onChange(event) { 
        var newValue = event.target.value;  
        
        setDetails(newValue);
    }

    if (popupOpenJar) {
        return (
            <div>
                <h className ="jar-details">Details</h>      
                <p className="entries-popup" onClick={toggleNewEntry}>Entries</p>
                <EntrySelect entrySelect={newEntryPopup} setEntrySelect={{toggleNewEntry}}/>
                <p className="friends-popup"onClick={toggleNewFriends}>Friends</p>             
                <FriendsSelect friendSelect={newFriendsPopup} setFriendSelect={{toggleNewFriends}}/>
                <p className="settings-popup"onClick={toggleNewSettings}>Settings</p>
                <SettingsSelect settingsSelect={newSettingsPopup} setSettingsSelect={{toggleNewSettings}}/>
            </div>
        )
    }
}

export default JarDetailsPopup;