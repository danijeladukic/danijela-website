import img from '../Vectors/Dripping.png'
import '../styles/Navbar.css';
import {Link} from 'react-scroll'


function Navbar() {
  

    return ( 
       <div className="navbar">
        <div className="navlinks">
            <Link className='link' to="about" smooth={true} duration={500}>ABOUT</Link>
            <Link className='link' to="projects" smooth={true} duration={600}>PROJECTS</Link>
            <Link className='link' to="contact" smooth={true} duration={800}>CONTACT</Link>
         </div>
         <img src={img} className="header" alt="navbarphoto"></img>
         
       </div>
     );
}

export default Navbar;