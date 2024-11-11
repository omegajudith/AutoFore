import { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleResetPassword = () => {
        // Your reset logic here
    };

    return (
        <div className="forgot-password-container">
            <h2>Enter phone number to reset password</h2>
            <input
                type="text"
                placeholder="Enter Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button onClick={handleResetPassword}>Submit</button>
            <div className="login-footer">
              <p>Already have an account? <Link to="/login" className="login-link">Login</Link></p>
           </div>

        </div>
    );
};

export default ForgotPassword;
