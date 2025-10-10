import resume from "../../assets/Resume-Revise-left.pdf";

export const Resume = () => {
    return (
        <div className="#resume flex flex-col m-3 mb-3">

            <div className="text-2xl font-bold mb-4">
                <h2>My Resume</h2>
            </div>

            <div>
                <embed src={resume} width={500} height={685} type="application/pdf" className="bg-white"></embed>
            </div>

            <div className="flex text-gray-600 mt-2">
                <h3>
                    Click the link <a href={resume} download className="font-bold">here</a> to download my resume!
                </h3>
            </div>
        </div>
    )
};