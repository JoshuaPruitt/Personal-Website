import { useState } from 'react'
import '../style/App.css'

class PageData {
    aboutMe(){
        return(
            <>
                <div>
                    <h2>About Me</h2>
                    {/* Content for about me */}
                </div>
            </>
        )};

    //portfolio sends back the portfolio page data
    portfolio() {
        return(
            <>
                <div>
                    <h2>Portfolio</h2>
                    <p>
                    Hey guys! This code is working now!
                    </p>
                </div>
            </>
        )};

    contactMe(){
        return(
            <>
                <div>
                    <h2>Contact Me</h2>
                    {/* Content for layout 1 */}
                </div>
            </>
    )};

    resume(){
        return(
            <>
                <div>
                    <h2>Resume</h2>
                </div>
            </>
    )};
}


//send out the page information requested
export default PageData