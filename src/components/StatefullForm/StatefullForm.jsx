import { useState } from "react";

const StatefullForm = () => {
    const [name, setName] = useState('rabi');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(password.length <6){
            setError('Password must be 6 characters or longer')
        }
        else{
            setError('')
            console.log(name, email, password);
        }
        // console.log(e.target.name.value);
        // console.log(e.target.email.value);
        // console.log(e.target.password.value);
        console.log('form submitted');
        // console.log(name, email, password);
    }

    const handleEmailChange = e =>{
        // console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handleNameChange = e =>{
        // console.log(e.target.value);
        setName(e.target.value);
    }
    const handlePasswordChange = e =>{
        // console.log(e.target.value);
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} value={name} type="text" name="name" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" required/>
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" required />
                <br />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefullForm;