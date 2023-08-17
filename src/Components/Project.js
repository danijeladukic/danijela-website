
import '../styles/Project.css'

import ReactPlayer from 'react-player'

function Project(props) {
 

    if (props.isWhite)
    return (
        
        <div name='projects' className="project white" >
            <section className="section" >


            <ReactPlayer
            className='react-player fixed-bottom'
            url= {props.videoUrl} 
            width='100%'
            height='100%'
            playing={true} 
    loop={true} 
    controls={true}
          />
        
            <div className="container">
                <h1 className={props.id}>{props.videoTitle}</h1>
                <p>{props.videoDescription}</p>
                <p>{props.technologies}</p>
                <a href={props.githubUrl} target='_blank' rel="noreferrer">GITHUB LINK</a>
            </div>

            </section>
        </div>
      );
    
    else{
      return (
        
        <div name='projects'className="project" >
            <section className="section" >


            <ReactPlayer
            className='react-player fixed-bottom'
            url= {props.videoUrl} 
            width='100%'
            height='100%'
            playing={true} 
    loop={true} 
    controls={true}

          />
        
            <div className="container">
                <h1 className={props.id}>{props.videoTitle}</h1>
                <p>{props.videoDescription}</p>
                <p>{props.technologies}</p>
                <a href={props.githubUrl}  target='_blank' rel="noreferrer">GITHUB LINK</a>
            </div>

            </section>
        </div>
      );

    }
}

export default Project;