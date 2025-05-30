import Project from "../interfaces/projectCard_Interface"

const Project_Card = (props: Project) => {
    return (
        <> 
            <a className="project" href={props.link}><img src={props.img}/></a>
        </>
    )
}

export default Project_Card;