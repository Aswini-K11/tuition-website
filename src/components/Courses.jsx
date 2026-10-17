
function Courses() {
  const courses = [
    {
      icon: "bi-book-fill",
      title: "Primary Classes",
      classes: "Classes 1–5",
      description: "Learn basic subjects with simple explanations and practice."
    },
    {
      icon: "bi-pencil-fill",
      title: "Middle School",
      classes: "Classes 6–8",
      description: "Build strong concepts in Maths, Science, and English."
    },
    {
      icon: "bi-mortarboard-fill",
      title: "Higher Classes",
      classes: "Classes 9–12",
      description: "Prepare for school exams with focused revision and guidance."
    }
  ];

  return (
    <section id="courses" className="py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Courses</h2>
          <p className="text-secondary">
            Choose the right learning program for your child.
          </p>
        </div>

        <div className="row g-4">
          {courses.map((course, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <div className="text-primary mb-3">
                  <i className={`bi ${course.icon} fs-1`}></i>
                </div>

                <h4 className="fw-bold">{course.title}</h4>
                <p className="text-primary fw-semibold">{course.classes}</p>
                <p className="text-secondary">{course.description}</p>

                <a href="#contact" className="btn btn-outline-primary mt-auto">
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
