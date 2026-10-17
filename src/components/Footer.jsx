
function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="fw-bold">
              <i className="bi bi-mortarboard-fill me-2"></i>
              Bright Future Tuition
            </h5>
            <p className="text-white-50 mb-0">
              Helping students learn, grow, and succeed.
            </p>
          </div>

          <div className="col-md-6 text-md-end">
            <a href="#home" className="text-white text-decoration-none me-3">
              Home
            </a>
            <a href="#courses" className="text-white text-decoration-none me-3">
              Courses
            </a>
            <a href="#contact" className="text-white text-decoration-none">
              Contact
            </a>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <p className="text-center text-white-50 small mb-0">
          © {new Date().getFullYear()} Bright Future Tuition. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
