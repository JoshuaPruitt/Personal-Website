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

                <div className='badges_container'>
                    <a href="https://github.com/JoshuaPruitt?tab=repositories&amp;" target="_blank"><img alt="React" src="https://img.shields.io/badge/-React-018EF5?style=flat-square&amp;logo=React&amp;logoColor=white"/></a>
                    <a href="https://github.com/JoshuaPruitt?tab=repositories&amp;language=javascript" target="_blank"><img alt="Java" src="https://img.shields.io/badge/-Javascript-f1e05a?style=flat-square&amp;logo=Javascript&amp;logoColor=white"/></a>
                    <a href="https://github.com/JoshuaPruitt?tab=repositories&amp;language=typescript" target="_blank"><img alt="Java" src="https://img.shields.io/badge/-Typescript-3178C6?style=flat-square&amp;logo=Typescript&amp;logoColor=white"/></a>
                    {/* <a href="https://github.com/JoshuaPruitt?tab=repositories&amp;language=python" target="_blank"><img alt="Python" src="https://img.shields.io/badge/-Python-3572A5?style=flat-square&amp;logo=Python&amp;logoColor=white"/></a> */}
                    <a href="https://github.com/JoshuaPruitt?tab=repositories&amp;language=html" target="_blank"><img alt="HTML" src="https://img.shields.io/badge/-HTML-e34c26?style=flat-square&amp;logo=HTML5&amp;logoColor=white"/></a>
                </div>
            </>
    )
};

export default portfolio;