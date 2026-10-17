
function Hero() {
  return (
    <section
      id="home"
      className="bg-primary text-white py-5"
    >
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1 className="display-4 fw-bold">
              Learn Today, Succeed Tomorrow!
            </h1>

            <p className="lead mt-3">
              Quality tuition for school students.
              Learn better with personal attention,
              friendly teaching, and regular practice.
            </p>

            <a href="#courses" className="btn btn-light btn-lg mt-3 me-2">
              Explore Courses
            </a>

            <a href="#contact" className="btn btn-outline-light btn-lg mt-3">
              Contact Us
            </a>
          </div>

          <div className="col-lg-5 text-center mt-4 mt-lg-0">
            <div className="bg-white text-primary rounded-4 p-5 shadow">
              <i className="bi bi-mortarboard-fill display-1"></i>
              <h3 className="mt-3 fw-bold">Bright Future Tuition</h3>
              <p className="mb-0">Your learning journey starts here!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
