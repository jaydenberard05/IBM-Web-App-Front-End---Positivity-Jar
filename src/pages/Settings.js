import RoundedButton from "../components/buttons/RoundedButton";
import ToggleButton from "../components/buttons/ToggleButton";
import "../style/account-and-settings.css";

const Settings = () => {

    function DarkTheme() { 
        
        var element = document.body;
        element.classList.toggle("darkmode-toggle");
    }

    return (
        <div className="content">
            <h2>Settings</h2>
            <div className="flex row">
                <p className="label">Privacy</p>
                <ToggleButton />
            </div>
            <div className="flex row">
                <p className="label">Notifications</p>
                <ToggleButton />
            </div>
            <div className="flex row buttons">
                <RoundedButton label="Delete Account" />
                <RoundedButton label="Disable Account" />
            </div>
            
        </div>

    )
}


    /*
    return <>
        <p className = "settings-tag">Settings</p>
        <p className = "settings-privacy">Privacy</p>
        <p className = "settingsinfo-privacy">Allow others to see if your account is online</p>
        <p className = "privacy-offtoggle">Off</p>
        <p className = "privacy-ontoggle">On</p>
        <p className="settings-notifications">Notifications</p>
        <p className="settingsinfo-notifications">Allow for all notifications</p>
        <p className="notifications-offtoggle">Off</p>
        <p className="notifications-ontoggle">On</p>
        <p className = "settings-delete">Delete Account</p>
        <p className = "settingsinfo-delete">Deletes your account and data</p>
        <p className = "settings-disable">Disable Account</p>
        <p className="settingsinfo-disable">Disables your account </p>

        <p className = "settings-experimental">Experimental</p>
        <p className ="settings-darkmode" onClick={DarkTheme}>Dark Mode</p>


    
    </>*/


/*
const Settings = () => {

    function DarkTheme() {
        var element = document.body;
        element.classList.toggle("darkmode-toggle");
    }


    return <>
        <p className = "settings-tag">Settings</p>
        <p className = "settings-privacy">Privacy</p>
        <p className = "settingsinfo-privacy">Allow others to see if your account is online</p>
        <p className = "privacy-offtoggle">Off</p>
        <p className = "privacy-ontoggle">On</p>
        <p className="settings-notifications">Notifications</p>
        <p className="settingsinfo-notifications">Allow for all notifications</p>
        <p className="notifications-offtoggle">Off</p>
        <p className="notifications-ontoggle">On</p>
        <p className = "settings-delete">Delete Account</p>
        <p className = "settingsinfo-delete">Deletes your account and data</p>
        <p className = "settings-disable">Disable Account</p>
        <p className="settingsinfo-disable">Disables your account </p>

        <p className = "settings-experimental">Experimental</p>
        <p className ="settings-darkmode" onClick={DarkTheme}>Dark Mode</p>


    
    </>


}*/

export default Settings