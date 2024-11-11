


const steps = [
  {
      icon: '⏏️', // Update with the icons you need
      title: 'Step 1',
      description: 'Select service on our website. Fill in all the required details and choose a collection time slot.',
  },
  {
      icon: '🔒',
      title: 'Step 2',
      description: 'Get a pin to auto service provider nearest to you.',
  },
  {
      icon: '🔄',
      title: 'Step 3',
      description: 'A comprehensive health report will be carried out on your vehicle. This will be sent to you shortly, informing you of any issues found. Along with the report, a quotation for the service parts, and any additional repairs, will also be sent to you.',
  },
];

const HowItWorks = () => {
  return (
      <div className="how-it-works-section">
          <h2 className="how-it-works-title">How it Works</h2>
          <div className="how-it-works-cards">
              {steps.map((step, index) => (
                  <div className="how-it-works-card" key={index}>
                      <div className="how-it-works-icon">{step.icon}</div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                  </div>
              ))}
          </div>
      </div>
  );
};

export default HowItWorks;
