
import Sidebar from './Sidebar';
import StepGuide from './StepGuide';
import SearchBar from './SearchBar';
import GarageItem from './GarageItem';  // Moved to a separate file for modularity

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <main className="main-content">
                <div className="welcome-section">
                    <h2>Hello 👋</h2> 
                    <p>Welcome to Autofore</p>
                    <StepGuide />
                </div>
                <SearchBar />
                <div className="garages-list">
                    <GarageItem
                        name="Mechbrif Auto (MBF)"
                        rating={4.5}
                        address="Mechbrif auto Ltd - MBF auto"
                        contact={{
                            name: "Mr. Allan",
                            role: "Administrator",
                            phone: "0765219273",
                            email: "mbfauto@gmail.com"
                        }}
                    />
                    <GarageItem
                        name="CTL AUTO GARAGE"
                        rating={4.0}
                        address="CTL AUTO LIMITED"
                        contact={{
                            name: "Mr. Andrew",
                            role: "General Manager",
                            phone: "0784850494",
                            email: "andrew.kye@ctlautolimited.com"
                        }}
                    />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
