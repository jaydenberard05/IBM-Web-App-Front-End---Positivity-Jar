import { NavLink } from 'react-router-dom';
import WelcomeBackground from './images/welcome.jpg'
import Logo from './images/JarTextLogo.png'

const About = () => {

    return (
        <>
        <img src={WelcomeBackground} className="welcome-background"/>
        <img src={Logo} className="welcome-logo"/>
       
        <p className="welcome-signin"><NavLink to='/sign-in'>Sign In</NavLink></p>
        <p className="welcome-about"><NavLink to ='/about'>About us</NavLink></p>
        </>
   )
}
export default About