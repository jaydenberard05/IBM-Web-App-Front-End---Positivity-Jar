import { useState } from "react";


function SettingsSelect ({settingsSelect, setSettingsSelect}) {



if(settingsSelect) {
    return (
            <>
             <h className="settingstab-option">Options</h>
             <hr className="jars-divider"></hr>              
             <form className="settingstab">
             <p>Duration:</p>
             <p>Visibility:</p>
             <h className="settingstab-perms">Permissions</h>
             <p>Allow Entries:</p>
             <p>Allow Invites:</p>
             <p></p>
             </form>
            </>
    )
}


}
export default SettingsSelect