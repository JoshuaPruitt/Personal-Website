import mePicture from "../assets/personalPhotos/IMG_1862.jpg";
import '../style/App.css'

const aboutMe = () => {
    return (
    <>
        <div>
            <h2>About Me</h2>
            {/* Content for about me */}
            <img className="pfp" src={mePicture} width='160' height='200'></img>
        </div>

        <div className='introduction'>
            <p>Hello!</p>

            <p>
                My name is Joshua Pruitt. I am a programmer taking the Coding bootcamp Web design course. 
                Some special interests of mine are Computers, Video Games, and Model kits.
                Currently im trying to branch out into other areas of programming so that I can get into game design some day!
            </p>

            <p>
                Thank you for taking the time to visit my page! 
            </p>
        </div>
            
    </>)
}

export default aboutMe;
