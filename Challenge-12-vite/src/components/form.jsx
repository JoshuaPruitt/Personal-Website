//handles the email validation check

function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default function Form(){
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)){
            setErrorMessage('Email is invalid!');

            return;
        }

        setEmail('');
        alert('Email Sent. Thank you!')
    };
}