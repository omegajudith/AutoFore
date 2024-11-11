import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Simple check if username and password fields are filled
        if (username && password) {
            // Navigate to dashboard after successful login
            navigate('/dashboard', { state: { username } });
        } else {
            alert('Please enter a valid username and password');
        }
    };

    return (
        <div className="login-container">
            <h2>LOGIN</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>

            <div className="login-footer">
                <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
                <p>Do you have an account? <Link to="/sign-up" className="signup-link">Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;
