import projects from '../data/projects.json'
import Project_Card from '../components/project_Card.js';

import "../style/project.css"
import '../style/App.css'


const portfolio = () => {
    return (
        <>
                <div id="mainTextBox">
                    <h2>Portfolio</h2>
                </div>

                <div id='portfolio_Container'>
                    {projects.map((project, index) => (
                        <Project_Card key={index} link={project.link} img={project.img}></Project_Card>
                    ))}
                </div>
            </>
    )
};

export default portfolio;