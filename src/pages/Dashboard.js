import { NavLink } from 'react-router-dom';
import "../style/dashboard.css"
import JarButtonLogo from './images/JarButtonLogo.png'
import AccountButtonLogo from './images/AccountButtonLogo.png'
import FriendsButtonLogo from './images/FriendsButtonLogo.png'
import SettingsButtonLogo from './images/SettingsButtonLogo.png'

const Dashboard = () => {
    return (
        <div className="content flex row">
            <div className="dashboard-button flex col">
                <img src={JarButtonLogo} className="dashboard-icon-landscape" alt= "logo"/>
                <p>Jars</p>
            </div>
            <div className="dashboard-button flex col">
                <img src={AccountButtonLogo} className= "dashboard-icon-portrait" alt= "logo"/>
                <p>Account</p>
            </div>
            <div className="dashboard-button flex col">
                <img src={FriendsButtonLogo} className="dashboard-icon-landscape" alt= "logo"/>
                <p>Friends</p>
            </div>
            <div className="dashboard-button flex col">
                <img src={SettingsButtonLogo} className="dashboard-icon-portrait" alt="logo"/>
                <p>Settings</p>
            </div>
        </div>
    )
    /*
    return (
   <>
   
  
   
   
   <button class="dashboardjar-button"><NavLink to="/my-jars">Jars</NavLink></button>
   <button class="dashboardaccount-button"><NavLink to ="/account">Account</NavLink></button>
   <button class="dashboardfriends-button">Friends</button>
   <button class="dashboardsettings-button"><NavLink to ="/settings">Settings</NavLink></button>
   </>
   
    
)*/
};

export default Dashboard;