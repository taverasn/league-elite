import { useState } from 'react';
import { login } from '../../services/userService';
import { Link } from 'react-router-dom';

const LoginPage = (props) => {

        const [formState, setFormState] = useState(getInitialFormState());

    function getInitialFormState() {
        return {
            email: '',
            password: ''
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

            await login(formState);

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
                    <button>Login</button>
                    <Link to='/'>Cancel</Link>
            </form>
        </div>
    );
}

export default LoginPage;