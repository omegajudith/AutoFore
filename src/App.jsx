import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/landing/Navbar';
import Footer from './components/landing/Footer';
import HeroSection from './components/landing/HeroSection';
import ServiceCards from './components/landing/ServiceCards';
import HowItWorks from './components/landing/HowItWorks';
import GarageForm from './components/landing/GarageForm';
import Testimonials from './components/landing/Testimonials';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Details from './components/Details';
import ForgotPassword from './components/ForgotPassword.jsx';
import Dashboard from './components/Dashboard';
import Appointments from './components/Appointments';
import Vehicle from './components/Vehicle';
import Ratings from './components/Ratings';
import Settings from './components/Settings';
import VehicleForm from './components/VehicleForm';
import './index.css';

function App() {
    return (
        <Router>
            <Navbar /> 
            <Routes>
                <Route path="/" element={
                    <>
                        <HeroSection />
                        <ServiceCards />
                        <HowItWorks />
                        <GarageForm />
                        <Testimonials />
                        <Footer />
                    </>
                } />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/details" element={<Details />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/vehicles" element={<Vehicle />} />
                <Route path="/ratings" element={<Ratings />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/vehicles/add" element={<VehicleForm />} /> {/* Updated path */}
            </Routes>
        </Router>
    );
}

export default App;
