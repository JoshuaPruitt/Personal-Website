import { Viewer} from '@react-pdf-viewer/core';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import '../style/App.css'


const resume = () => {

    return (
        <>
                <div>
                    <h2>My Resume</h2>
                </div>

                <div style={{ border: '1px solid rgba(0, 0, 0, 0.3)', height: '100%',}}>
                    <Viewer fileUrl={"src/assets/Resume.pdf"}>
                    </Viewer>
                </div>

                <div className='resume'>
                    <h3>Click the link <a href='src/assets/Resume.pdf' download>here</a> to download my resume!</h3>
                </div>
        </>
    )
}

export default resume