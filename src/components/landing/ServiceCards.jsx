

const services = [
    { icon: '🔧', title: 'Car Service' },
    { icon: '🚨', title: 'Road Side Support' },
    { icon: '🚗', title: 'Car Wash' },
    { icon: '🎨', title: 'Body Spray' },
    { icon: '🔨', title: 'Panel Beating' },
    { icon: '🔍', title: 'Car Diagnosis' },
    { icon: '🛠️', title: 'General Repair' },
    { icon: '📋', title: 'Insurance' },
];

const ServiceCards = () => {
    return (
        <div className="services-container">
            {services.map((service, index) => (
                <div className="service-card" key={index}>
                    <div className="service-card-icon">{service.icon}</div>
                    <div className="service-card-title">{service.title}</div>
                </div>
            ))}
        </div>
    );
};

export default ServiceCards;
