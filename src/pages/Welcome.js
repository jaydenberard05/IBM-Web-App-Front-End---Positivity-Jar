import { NavLink } from 'react-router-dom';
import WelcomeBackground from './images/welcome.jpg'
import Logo from './images/JarTextLogo.png'
import Slogan from './images/SloganJarText.png'
const Welcome = () => {

    return (
        <>
        <img src={WelcomeBackground} className="welcome-background"/>
        <img src={Logo} className="welcome-logo"/>
        <img src={Slogan} className="welcome-info"/>
        <p className="welcome-signin"><NavLink to='/sign-in'>Sign In</NavLink></p>
        <p className="welcome-about"><NavLink to='/about'>About us</NavLink></p>
        </>
   )
}
export default Welcome