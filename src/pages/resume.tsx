import '../style/App.css'


const resume = () => {

    return (
        <>
            <div>
                <h2>My Resume</h2>
            </div>

            <div className="pdfViewer" style={{height: '85%'}}>
                <embed src="../assets/Resume.pdf" width="500" height="685" type="application/pdf"></embed>
            </div>


            <div className='resume'>
                <h3>Click the link <a href='../assets/Resume.pdf' download>here</a> to download my resume!</h3>
            </div>
        </>
    )
}

export default resume