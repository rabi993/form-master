
import useInputState from "../../hooks/useInputState";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('Rabi') 
    // const nameState = useInputState('Rabi') 
    const emailState = useInputState('Rabi@gmail.com') 

    const handleSubmit = e =>{
        console.log('form data', emailState.value);
        e.preventDefault();

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" id="" required/>
                <br />
                <input type="password" name="password" required />
                <br />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;