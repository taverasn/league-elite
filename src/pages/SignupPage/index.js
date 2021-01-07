import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = (props) => {

    const [formState, setFormState] = useState(getInitialFormState());

    function getInitialFormState() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConf: ''
        }
    };

    function handleChange(event) {
        setFormState(prevState => ({
          ...prevState,
          [event.target.name]: event.target.value
        }));
      }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('submitteed form data: ', formState);

        setFormState(getInitialFormState());

        props.history.push('/dashboard');
    }
    

    return (
        <div className="Page">
            <form onSubmit={handleSubmit}>

                    <input 
                    type="text" 
                    placeholder="First Name" 
                    value={formState.firstName} 
                    name="firstName" 
                    onChange={handleChange} 
                    />
                    <input 
                    type="text" 
                    placeholder="Last Name" 
                    value={formState.lastName} 
                    name="lastName" 
                    onChange={handleChange} 
                    />
                    <input 
                    type="text" 
                    placeholder="Email" 
                    value={formState.email} 
                    name="email" 
                    onChange={handleChange} 
                    />
                    <input 
                    type="password" 
                    placeholder="Password" 
                    value={formState.password} 
                    name="password" 
                    onChange={handleChange} 
                    />
                    <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={formState.passwordConf} 
                    name="passwordConf" 
                    onChange={handleChange} 
                    />
                    <button>Signup</button>
                    <Link to='/'>Cancel</Link>
            </form>
        </div>
    )
}

export default SignupPage;