import { useNavigate, Link } from 'react-router-dom';

const Details = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/login'); 
    };

    return (
        <div className="details-container">
            <div className="details-form">
                <h2>Enter your details</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="details-input"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="details-input"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Re-type Password"
                        className="details-input"
                        required
                    />
                    <button type="submit" className="details-submit">Submit</button>
                    <p >
                        Remember Password? <Link to="/login"  className='login-link'>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Details;
