import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../services/userService';

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

    async function handleSubmit(event) {
        try {
            event.preventDefault();

            await signup(formState);

            setFormState(getInitialFormState());

            props.handleSignupOrLogin();
    
            props.history.push('/dashboard');
        } catch (error) {
            alert(error.message);
        }
    }
    

    return (
        <div className="Page">
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                    type="text" 
                    placeholder="First Name" 
                    value={formState.firstName} 
                    name="firstName" 
                    onChange={handleChange} 
                    />
                </div>
                <div>
                    <input 
                    type="text" 
                    placeholder="Last Name" 
                    value={formState.lastName} 
                    name="lastName" 
                    onChange={handleChange} 
                    />
                </div>
                <div>
                    <input 
                    type="text" 
                    placeholder="Email" 
                    value={formState.email} 
                    name="email" 
                    onChange={handleChange} 
                    />
                </div>
                <div>
                    <input 
                    type="password" 
                    placeholder="Password" 
                    value={formState.password} 
                    name="password" 
                    onChange={handleChange} 
                    />
                </div>
                <div>
                    <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={formState.passwordConf} 
                    name="passwordConf" 
                    onChange={handleChange} 
                    />
                </div>
                    <button>Signup</button>
                    <Link to='/'>Cancel</Link>
            </form>
        </div>
    )
}

export default SignupPage;