
function About() {
  const features = [
    "Experienced and friendly teaching",
    "Individual attention for every student",
    "Regular tests and progress tracking",
    "A positive and supportive learning environment"
  ];

  return (
    <section id="about" className="bg-light py-5">
      <div className="container py-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="bg-white rounded-4 shadow-sm p-5 text-center">
              <i className="bi bi-mortarboard-fill display-1 text-primary"></i>
              <h3 className="fw-bold mt-3">Learning Made Simple</h3>
              <p className="text-secondary mb-0">
                Helping students learn with confidence.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <p className="text-primary fw-semibold mb-2">
              ABOUT OUR TUITION
            </p>

            <h2 className="fw-bold mb-3">
              Every Student Deserves to Succeed
            </h2>

            <p className="text-secondary">
              At Bright Future Tuition, we help students understand
              their lessons clearly, practise regularly, and build
              confidence in their studies.
            </p>

            <ul className="list-unstyled mt-4">
              {features.map((feature, index) => (
                <li className="mb-3" key={index}>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  {feature}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn btn-primary mt-2">
              Join Our Tuition
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
