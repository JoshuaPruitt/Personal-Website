import placeholderResume from '../assets/placeholderFiles/placeholder.txt';
import '../style/App.css'

const resume = () => {
    return (
        <>
                <div>
                    <h2>My Resume</h2>
                </div>

                <h3>Click the link <a href={placeholderResume} download>here</a> to download my resume!</h3>
            </>
    )
}

export default resume