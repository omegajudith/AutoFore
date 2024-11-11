import Sidebar from './Sidebar';

const Settings = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <main className="main-content">
                <div className="coming-soon-container" style={{ textAlign: 'center', marginTop: '20%' }}>
                    <h1 style={{ fontSize: '3rem', color: '#ff6200' }}>COMING SOON</h1>
                </div>
            </main>
        </div>
    );
};

export default Settings;
