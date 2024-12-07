import Project from "../interfaces/projectCard_Interface"

const Project_Card = (props: Project) => {
    return (
        <>
            <div className="project">
                <a href={props.link}><img src={props.img}/></a>
            </div>
        </>
    )
}

export default Project_Card;