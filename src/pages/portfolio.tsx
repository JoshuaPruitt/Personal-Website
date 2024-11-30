import { projects } from '../data/projects.js'
import '../style/App.css'

const portfolio = () => {
    return (
        <>
                <div id="mainTextBox">
                    <h2>My Portfolio</h2>
                    <p>
                    This is my work! Hover over an image to see its links!
                    </p>
                </div>

                <div id='portfolioContiner'>
                    {projects.map((project) => (
                       <div id='projects' key={project.type}>
                        <div className='projectImg' style={{  
                                        backgroundImage: `url(${project.img})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat'
                                        }}>

                        <a href={project.link}>
                            <img className='github' src={project.logo[0]} width='50' height='50'></img>
                        </a>
                        
                        <a href={project.dep || '#none'}>
                            <img className='www' src={project.logo[1]} width='60' height='60'></img>             
                        </a>
                        </div>
                       </div>
                    ))}
                </div>
            </>
    )
};

export default portfolio;