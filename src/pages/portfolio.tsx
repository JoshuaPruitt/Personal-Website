import { projects } from '../data/projects.js'
import '../style/App.css'

import Project_Card from '../components/card.js';

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
                    {projects.map((project, index) => (
                        <div id='projects' key={index}>
                            <Project_Card backgroundImage={project.img} githubLink={project.link} linkedInLink={project.dep}></Project_Card>
                        </div>
                    ))}
                </div>
            </>
    )
};

export default portfolio;