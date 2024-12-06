import Resume from "../assets/Resume.pdf";
import '../style/App.css'

const resume = () => {

    return (
        <>
            <div>
                <h2>My Resume</h2>
            </div>

            <div className="pdfViewer" style={{height: '85%'}}>
                <embed src={Resume} width="500" height="685" type="application/pdf"></embed>
            </div>


            <div className='resume'>
                <h3>Click the link <a href={Resume} download>here</a> to download my resume!</h3>
            </div>
        </>
    )
}

export default resume