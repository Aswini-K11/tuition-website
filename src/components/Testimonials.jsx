
function Testimonials() {
  const reviews = [
    {
      name: "Student 1",
      className: "Class 8",
      message:
        "The lessons are easy to understand, and I feel more confident in my studies."
    },
    {
      name: "Student 2",
      className: "Class 10",
      message:
        "Regular practice helps me understand difficult topics and prepare for exams."
    },
    {
      name: "Parent 1",
      className: "Parent",
      message:
        "The teaching approach is friendly, and my child gets personal attention."
    }
  ];

  return (
    <section id="testimonials" className="py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold">What Students Say</h2>
          <p className="text-secondary">
            A supportive place to learn and grow.
          </p>
        </div>

        <div className="row g-4">
          {reviews.map((review, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="text-warning mb-3">
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill"></i>
                </div>

                <p className="text-secondary">
                  "{review.message}"
                </p>

                <h5 className="fw-bold mb-1">{review.name}</h5>
                <small className="text-secondary">{review.className}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
