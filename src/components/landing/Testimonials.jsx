const testimonials = [
  {
      image: '👩',
      quote: "AUTOFORE has truly transformed my car ownership experience. It's convenient, cost-effective, and provides top-notch service. I highly recommend it to all car owners!",
      name: 'Milly Khainza',
      position: 'ED, Send A Girl!'
  }
];

const Testimonials = () => {
  return (
      <div className="testimonials-section">
          <h2>Testimonials</h2>
          <div className="testimonial-content">
              <div className="testimonial-image">{testimonials[0].image}</div>
              <div className="testimonial-text">
                  <p className="testimonial-quote">&quot;{testimonials[0].quote}&quot;</p>
                  <p className="testimonial-name">{testimonials[0].name}</p>
                  <p className="testimonial-position">{testimonials[0].position}</p>
              </div>
          </div>
      </div>
  );
};

export default Testimonials;
