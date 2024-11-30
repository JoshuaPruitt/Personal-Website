import '../style/App.css'

function validateEmail(email: string){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const contactMe = () => {
    // const [email, setEmail] = useState('');

    return (
        <>
                <div>
                    <h2>Contact Me</h2>
                </div>

                <form>
                    <label>Name: </label>
                    <input id="name" type='text'></input>

                    <label>Email Address: </label>
                    <input id='email' name='email' type='email'></input>

                    <label>Message: </label>
                    <input id='message' type='text'></input>

                    <button id='submit' type='submit'>Submit</button>
                </form>
                
                {/* {form.errorMessage && (
                    <div>
                        <p className='error-text'>{form.errorMessage}</p>
                    </div>
                )} */}
            </>
    )
}

export default contactMe