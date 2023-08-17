import img from '../Images/cv.png';
import '../styles/About.css'
import { useState } from 'react';
import resume from '../Images/cv.pdf'

function About() {
    const [isScaled, setIsScaled] = useState(false)
    const handleToggle = function (){
        setIsScaled(!isScaled);
      }
    return (
        <div name = 'about' className="about">
            <img onClick={handleToggle} className={`cv ${isScaled ? "scaled" : ""}`} src={img} alt="cv"></img>
            <a href={resume} download="Resume" className='resume'><button>Click to get to know me.</button></a>
        </div>

      );
}

export default About;