
import '../styles/Contact.css'
import LinkedIn from '../Images/LinkedIn.png' 
import Github from '../Images/GitHub.png' 
import Email from '../Images/Email.png' 


function Contact() {
    return (
        <div name = 'contact' className="contact">
            <div  className="content">
                <div className="contact-me" >CONTACT ME</div>
                <div  className="description">Feel free to contact me for collaboration!</div>
                <div className="icons-list">
                <a href="https://www.linkedin.com/in/danijela-dukic-84881a275" target="_blank" rel="noreferrer">
                    <img src={LinkedIn} alt="linkedin-icon"></img>
                </a>
                <a href="https://github.com/danijeladukic" target="_blank" rel="noreferrer">
                <img src={Github} alt="github-icon"></img>
                </a>
                <a href="mailto:danijeladukic7@outlook.com" rel="noreferrer">
                <img src={Email} alt="email-icon"></img>
                </a>
                </div>
            </div>
        </div>
      );
}

export default Contact;