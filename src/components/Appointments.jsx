import Sidebar from './Sidebar';

const Appointments = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <main className="main-content">
                {/* Appointments Header Section */}
                <div className="appointments-header">
                    <div className="card total-appointments">
                        <h3>0</h3>
                        <p>Total Appointments</p>
                    </div>
                    <div className="card pending-appointments">
                        <h3>0</h3>
                        <p>Pending Appointments</p>
                    </div>
                    <div className="card honoured-appointments">
                        <h3>0</h3>
                        <p>Honoured Appointments</p>
                    </div>
                    <div className="card cancelled-appointments">
                        <h3>0</h3>
                        <p>Cancelled Appointments</p>
                    </div>
                </div>

                {/* Appointment Details Section */}
                <div className="appointments-details">
                    <div className="appointment-details-card">
                        <h4>Appointment Details</h4>
                        <div className="appointment-info">
                            <p><strong>Garage Details:</strong> N/A</p>
                            <p><strong>Status:</strong> Undefined</p>
                            <p><strong>Date & Time:</strong> N/A</p>
                            <p><strong>Vehicles:</strong> N/A</p>
                            <p>
                                <strong>Feedback:</strong> Do you have any feedback about the appointment? 
                                <span className="provide-feedback"> Provide Feedback</span>
                            </p>
                        </div>
                    </div>

                    {/* Appointment History Section */}
                    <div className="appointments-history">
                        <h4>Date</h4>
                        <table className="appointments-table">
                            <thead>
                                <tr>
                                    <th>Garage</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>No appointment</td>
                                    <td>N/A</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Appointments;
