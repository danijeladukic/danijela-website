import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import About from './Components/About';
import Project from './Components/Project';
import projectsArray from './constants/projects';
import Contact from'./Components/Contact';



function App() {
 



  return (
    <div className="App">
      
      <Navbar/>
      <HomePage />
      <About />
      {projectsArray.map((project) => 
          <Project key={project.id} id={project.id} videoTitle={project.videoTitle} videoDescription={project.videoDescription} technologies= {project.technologies} videoUrl={project.videoUrl} githubUrl={project.githubUrl} isWhite={project.isWhite}/>
    
      
      
      )}
      <Contact />
      
     

    </div>
  );
}

export default App;
