
function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const course = form.course.value;
    const message = form.message.value;

    const text = `Hello, I want to enquire about tuition.

Name: ${name}
Phone: ${phone}
Course: ${course}
Message: ${message}`;

    const whatsappNumber = "8940605656";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

  return (
    <section id="contact" className="bg-light py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Contact Us</h2>
          <p className="text-secondary">
            Have questions? Send us an enquiry.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="bg-primary text-white rounded-4 p-4 h-100">
              <h3 className="fw-bold mb-4">Get in Touch</h3>

              <p>
                <i className="bi bi-telephone-fill me-2"></i>
                +91 98765 43210
              </p>

              <p>
                <i className="bi bi-envelope-fill me-2"></i>
                brightfuture@example.com
              </p>

              <p>
                <i className="bi bi-geo-alt-fill me-2"></i>
                Your tuition centre address
              </p>

              <p className="mt-4 mb-0">
                Contact us to learn about our courses and class timings.
              </p>
            </div>
          </div>

          <div className="col-lg-7">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-4 shadow-sm p-4"
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Parent or Student Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="form-control"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="course" className="form-label">
                  Select Course
                </label>
                <select
                  id="course"
                  name="course"
                  className="form-select"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose a class
                  </option>
                  <option>Classes 1–5</option>
                  <option>Classes 6–8</option>
                  <option>Classes 9–12</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Write your enquiry"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Enquiry on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;



