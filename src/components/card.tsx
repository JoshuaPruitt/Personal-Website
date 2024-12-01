import githubLogo from '../assets/github-logo.png';
import linkedInLogo from '../assets/linkedin-logo.png';

export default function Project_Card(props: any){
    const cardStyle = {
        backgroundImage: props.backgroundImage,
        githubLink: props.githubLink,
        linkedInLink: props.linkedInLink || "#none"
    }

    return (
        <div className="card">
            <div className='projectImg' style={{  
                backgroundImage: `url(${cardStyle.backgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
            }}>
                <a href={cardStyle.githubLink}>
                    <img className='github' src={githubLogo} width='50' height='50'></img>
                </a>
                        
                <a href={cardStyle.linkedInLink}>
                    <img className='www' src={linkedInLogo} width='60' height='60'></img>             
                </a>
            </div>
        </div>
    )
}