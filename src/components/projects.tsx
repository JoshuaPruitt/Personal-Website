import projectsData from '../data/projects.json';

export const Projects = () => {
    return (
        <div className="flex flex-col m-3">
            <div className="text-2xl font-bold mb-3">
                <h2>My Projects</h2>
            </div>

            <div className='flex ml-3 space-x-1'>
                {projectsData.map((project, index) => (
                    <div key={index}>
                        <a href={project.link}>
                            <img src={project.img} width={400} height={150}></img>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
};