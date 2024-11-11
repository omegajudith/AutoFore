import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/details'); // Redirect to the details page on submit
    };

    const handleLoginRedirect = () => {
        navigate('/login'); // Redirect to the login page
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2>Enter phone number to register</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Phone Number"
                        className="signup-input"
                        required
                    />
                    <button type="submit" className="signup-submit">Submit</button>
                </form>
                <p className="signup-login">
                    Already have an account? <span onClick={handleLoginRedirect}>Login</span>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
