import { useState } from "react";
export function Capabilities() {
  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = "translateY(-15px)";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
  };
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Define the jobOffers array with title and content for each accordion item
  const jobOffers = [
    {
      title: "Strength",
      content: (
        <ul style={{ listStyleType: "disc" }}>
          <li>15+ Years of professional personnel management experience</li>
          <li>Customized services for outsourcing workforce</li>
          <li>PAN India Presence .</li>
          <li>End to end dynamic IT recruitment services .</li>
          <li>Help your company to be 100% statutory complaint .</li>
          <li>An approach based on SLAs and flexible reporting.</li>
        </ul>
      ),
    },
    {
      title: "Healthy & safety",
      content: (
        <ul style={{ listStyleType: "disc" }}>
          <li>We are an ISO 45001:2018 & ISO 9001:2015 certified company.</li>
          <li>
            To set and maintain high standards of construction and installation
            safety with an annual review of the Safety Policy .
          </li>
          <li>
            To ensure that staff, customers and visitors are adequately informed
            of risks.
          </li>
          <li>Appropriate, receive instruction, training and supervision</li>
          <li>To document and review risk assessments.</li>
          <li>
            To implement this policy through codes of practice, schedules,
            guidance notes and training .
          </li>
          <li>
            To ensure the provision of a trained health and safety co-ordinator
            having adequate training to ensure that all sites conform to local
            and international standards .
          </li>
        </ul>
      ),
    },
  ];
  return (
    <div className="pg-wrapper">
      <header className="pg-header d-flex flex-column" id="header">
        {/* header top  */}
        <div className="pg-top bg-secondary-v1 text-white">
          <div className="container d-none d-lg-flex justify-content-lg-between align-items-lg-stretch">
            <div className="pg-top- d-flex align-items-center">
              <div className="contact-info d-flex align-items-center">
                <div>
                  <span className="icon-sm op-08 me-1">
                    <i className="lni lni-map-marker" />
                  </span>
                  <span className="text-sm op-08">Call us:+91 9650920050</span>
                </div>
                <div className="vert-line mx-3" />
                <div>
                  <span className="icon-sm op-08 me-1">
                    <i className="lni lni-envelope" />
                  </span>
                  <span className="text-sm op-08">
                    babrubhan@bluebellstechno.com
                  </span>
                </div>
              </div>
            </div>
            <div className="pg-top-r d-flex align-items-center">
              <div className="pg-top-block">
                <span className="icon-sm me-1">
                  <i className="fa-solid fa-clock" />
                </span>
                <span className="text-sm op-08 fw-3">
                  Office Hour: 10:00 AM - 9:00 PM
                </span>
              </div>
              <div className="vert-line mx-2" />
              <ul className="so-links d-flex align-items-center">
                <li>
                  <a href="#" className="so-link-itm text-white op-08">
                    <i className="lni lni-facebook-filled icon-sm" />
                  </a>
                </li>
                <li>
                  <a href="#" className="so-link-itm text-white op-08">
                    <i className="lni lni-twitter-filled icon-sm" />
                  </a>
                </li>
                <li>
                  <a href="#" className="so-link-itm text-white op-08">
                    <i className="lni lni-linkedin-original icon-sm" />
                  </a>
                </li>
                <li>
                  <a href="#" className="so-link-itm text-white op-08">
                    <i className="lni lni-instagram-filled icon-sm" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* end of header top */}
        {/* navbar section */}
        <nav className="pg-navbar d-flex align-items-center">
          <div className="container d-lg-flex align-items-center justify-content-between">
            <div className="pg-brand-and-toggler d-flex justify-content-between">
              <a href="#" className="navbar-brand d-flex align-items-baseline">
                <span className="fw-7 fs-xx-lg " style={{ textAlign: "left" }}>
                  <img
                    src="./assets/images/logo (2).jpeg"
                    alt=""
                    style={{
                      width: "100%",
                      maxWidth: 100,
                      height: 50,
                      position: "relative",
                      right: 40,
                    }}
                  />
                </span>
                {/* <span class="text-primary sm-dot d-block"></span> */}
              </a>
              <button type="button" className="navbar-show-btn d-lg-none">
                <i className="lni lni-menu" />
              </button>
            </div>
            <div className="pg-navbar-collapse p-4">
              <div className="pg-navbar-nav-top d-flex align-items-center justify-content-between mb-4 mt-2 d-lg-none">
                <p className="text-uppercase text-white mb-0 fs-lg fw-6 ls-1">
                  menu
                </p>
                <button type="button" className="navbar-hide-btn d-lg-none">
                  <i className="lni lni-close" />
                </button>
              </div>
              <ul className="pg-navbar-nav d-lg-flex">
                <li className="pg-nav-item">
                  <a
                    href="/home"
                    className="pg-nav-link  text-capitalize no-wrap"
                  >
                    Home
                  </a>
                </li>
                <li className="pg-nav-item">
                  <a
                    href="/about"
                    className="pg-nav-link text-capitalize no-wrap"
                  >
                    About Us
                  </a>
                </li>
                <li className="pg-nav-item">
                  <a
                    href="/services"
                    className="pg-nav-link  text-capitalize no-wrap"
                  >
                    Services
                  </a>
                </li>
                <li className="pg-nav-item">
                  <a
                    href="/about"
                    className="pg-nav-link active text-capitalize no-wrap"
                  >
                    Capabalities
                  </a>
                </li>
                <li className="pg-nav-item">
                  <a
                    href="/strength"
                    className="pg-nav-link text-capitalize no-wrap"
                  >
                    Strength
                  </a>
                </li>
                <li className="pg-nav-item">
                  <a
                    href="/contact"
                    className="pg-nav-link text-capitalize no-wrap"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* end of navbar section */}
      </header>
      {/* header content */}
      <div className="main-breadcrumb text-center py-5 bg-light">
        <div className="container">
          <div className="header-breadcrumb">
            <h4 className="header-breadcrumb-title">Capabilities</h4>
            <nav
              aria-label="breadcrumb"
              className="d-flex justify-content-center align-items-center mt-2"
            >
              <ol className="breadcrumb">
                {/* <li class="breadcrumb-item"><a href="#">Home</a></li> */}
                {/* <li class="breadcrumb-item active" aria-current="page">Capabilities</li> */}
              </ol>
            </nav>
            <p className="p-text header-breadcrumb-p">
              We have highly skilled manpower to provide various services to the
              client and team of qualified HR professionals to manage the
              staffing, employment management, payroll management, compliance
              management and team of qualified accounts and legal professionals
              to manage the local state and national labour laws, monthly
              payroll tax filing, working hours compliance, minimum wages norms,
              employee benefit and tax regulations.With our administrative
              management team we manage the expenses, employee benefits etc.
            </p>
          </div>
        </div>
      </div>
      {/* end of header content */}
      {/* blog section */}
      <section className="pg-section sc-blog d-flex align-items-center bg-white">
        <div className="container">
          <div className="sc-whyus-cnt mx-3">
            <div className="text-center">
              <div className="sc-title-sm">
                <h6 className="text-secondary">Our Capabilities </h6>
              </div>
              <div className="sc-title">
                <h2>
                  Innovative approach to motivate staff members and also to
                  perform skill development
                </h2>
              </div>
            </div>
            <div className="sc-cards row mt-5">
              <div className="col-lg-6 col-xl-4 mb-5">
                <a href="#">
                  <div className="sc-list-card card h-100">
                    <div className="card-img">
                      <img src="assets/images/Untitled (29).png" alt="" />
                    </div>
                    <div className="card-body py-4 px-4">
                      <div className="card-date d-flex align-items-center">
                        <span className="icon-sm me-2 op-07"></span>
                      </div>
                      <h5 className="card-title op-09 mb-3">
                        Highly Skilled Manpower
                      </h5>
                      <p className="p-text">
                        We boast a team of highly skilled professionals capable
                        of delivering various services to meet the diverse needs
                        of our clients.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-xl-4 mb-5">
                <a href="#">
                  <div className="sc-list-card card h-100">
                    <div className="card-img">
                      <img
                        src="assets/images/expert hr management.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="card-body py-4 px-4">
                      <div className="card-date d-flex align-items-center">
                        <span className="icon-sm me-2 op-07"></span>
                      </div>
                      <h5 className="card-title op-09 mb-3">
                        Expert HR Management
                      </h5>
                      <p className="p-text">
                        Our qualified HR professionals excel in managing
                        staffing, employment, payroll, and compliance, ensuring
                        seamless operations and legal adherence.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-xl-4 mb-5">
                <a href="#">
                  <div className="sc-list-card card h-100">
                    <div className="card-img">
                      <img src="assets/images/blog/blog-3.jpg" alt="" />
                    </div>
                    <div className="card-body py-4 px-4">
                      <div className="card-date d-flex align-items-center">
                        <span className="icon-sm me-2 op-07"></span>
                      </div>
                      <h5 className="card-title op-09 mb-3">
                        Comprehensive Legal and Accounting Support{" "}
                      </h5>
                      <p className="p-text">
                        With a team of qualified accounts and legal
                        professionals, we navigate local, state, and national
                        labor laws, handle monthly payroll tax filing, ensure
                        working hours compliance, and manage employee benefits
                        and tax regulations.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-xl-4 mb-5">
                <a href="#">
                  <div className="sc-list-card card h-100">
                    <div className="card-img">
                      <img src="assets/images/TA.png" alt="" />
                    </div>
                    <div className="card-body py-4 px-4">
                      <div className="card-date d-flex align-items-center">
                        <span className="icon-sm me-2 op-07"></span>
                      </div>
                      <h5 className="card-title op-09 mb-3">
                        Efficient Administrative Management
                      </h5>
                      <p className="p-text">
                        Our administrative management team efficiently handles
                        expenses, employee benefits, and other administrative
                        tasks, allowing our clients to focus on their core
                        business activities.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-xl-4 mb-5">
                <a href="#">
                  <div className="sc-list-card card h-100">
                    <div className="card-img">
                      <img src="assets/images/Untitled (32).png" alt="" />
                    </div>
                    <div className="card-body py-4 px-4">
                      <div className="card-date d-flex align-items-center">
                        <span className="icon-sm me-2 op-07"></span>
                      </div>
                      <h5 className="card-title op-09 mb-3">
                        Strategic Partnerships
                      </h5>
                      <p className="p-text">
                        We have established strategic partnerships with online
                        portals to access a talented pool of professionals and
                        consultancy services specializing in diverse fields.
                        These partnerships enable us to provide our clients with
                        top-notch talent and comprehensive solutions tailored to
                        their specific requirements.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* =================soft skill start */}
          <section className="pg-section sc-process bg-white">
            <div className="container">
              <div className="sc-process-cnt mx-3">
                <div className="text-center">
                  <div className="sc-title-sm">
                    <h6 className="text-primary">Benefits</h6>
                  </div>
                  <div className="sc-title">
                    <h2>
                      We prioritize the welfare and well-being of our outsourced
                      employees by implementing a range of beneficial and
                      statutory schemes. Here is how we support our employees
                    </h2>
                  </div>
                </div>
                <div className="sc-list mt-5 row">
                  <div
                    className="sc-list-itm col-sm-6 col-xl-3 mb-4"
                    style={{ transition: "transform 0.3s ease" }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <div className="itm-circle d-flex align-items-center justify-content-center">
                      <div className="itm-icon">
                        <img src="assets/images/process/icon-1.png" alt="" />
                      </div>
                      {/* <div class="itm-val">01</div> */}
                    </div>
                    <div className="itm-text">
                      <div className="sc-title-sm mb-3">
                        <h6> ESI &amp; PF</h6>
                      </div>
                      <p className="p-text width-minimized">
                        We provide Employees State Insurance (ESI) and Provident
                        Fund (PF) coverage to ensure financial security and
                        healthcare benefits for our employees
                      </p>
                    </div>
                  </div>
                  <div
                    className="sc-list-itm col-sm-6 col-xl-3 mb-4"
                    style={{ transition: "transform 0.3s ease" }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <div className="itm-circle d-flex align-items-center justify-content-center">
                      <div className="itm-icon">
                        <img src="assets/images/process/icon-2.png" alt="" />
                      </div>
                      {/* <div class="itm-val">02</div> */}
                    </div>
                    <div className="itm-text">
                      <div className="sc-title-sm mb-3">
                        <h6>Gratuity</h6>
                      </div>
                      <p className="p-text width-minimized">
                        Our employees are entitled to gratuity benefits,
                        offering them financial support upon retirement or
                        resignation after completing a qualifying period of
                        service.
                      </p>
                    </div>
                  </div>
                  <div
                    className="sc-list-itm col-sm-6 col-xl-3 mb-4"
                    style={{ transition: "transform 0.3s ease" }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <div className="itm-circle d-flex align-items-center justify-content-center">
                      <div className="itm-icon">
                        <img src="assets/images/process/icon-3.png" alt="" />
                      </div>
                      {/* <div class="itm-val">03</div> */}
                    </div>
                    <div className="itm-text">
                      <div className="sc-title-sm mb-3">
                        <h6>Bonus</h6>
                      </div>
                      <p className="p-text width-minimized">
                        We offer bonus payments as a form of incentive and
                        recognition for our employees hard work and dedication.
                      </p>
                    </div>
                  </div>
                  <div
                    className="sc-list-itm col-sm-6 col-xl-3 mb-4"
                    style={{ transition: "transform 0.3s ease" }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <div className="itm-circle d-flex align-items-center justify-content-center">
                      <div className="itm-icon">
                        <img src="assets/images/process/icon-4.png" alt="" />
                      </div>
                      {/* <div class="itm-val">04</div> */}
                    </div>
                    <div className="itm-text">
                      <div className="sc-title-sm mb-3">
                        <h6>Group Medi claim coverage.</h6>
                      </div>
                      <p className="p-text width-minimized">
                        Our employees are covered under a group medical
                        insurance policy, ensuring access to comprehensive
                        healthcare coverage for themselves and their families.
                      </p>
                    </div>
                  </div>
                  <div
                    className="sc-list-itm col-sm-6 col-xl-3 mb-4"
                    style={{ transition: "transform 0.3s ease" }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <div className="itm-circle d-flex align-items-center justify-content-center">
                      <div className="itm-icon">
                        <img src="assets/images/process/icon-4.png" alt="" />
                      </div>
                      {/* <div class="itm-val">05</div> */}
                    </div>
                    <div className="itm-text">
                      <div className="sc-title-sm mb-3">
                        <h6> Accidental coverage.</h6>
                      </div>
                      <p className="p-text width-minimized">
                        We provide accidental coverage to safeguard our
                        employees against unforeseen accidents or injuries that
                        may occur during the course of their work.
                      </p>
                    </div>
                  </div>
                  <div
                    className="sc-list-itm col-sm-6 col-xl-3 mb-4"
                    style={{ transition: "transform 0.3s ease" }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <div className="itm-circle d-flex align-items-center justify-content-center">
                      <div className="itm-icon">
                        <img src="assets/images/process/icon-4.png" alt="" />
                      </div>
                      {/* <div class="itm-val">06</div> */}
                    </div>
                    <div className="itm-text">
                      <div className="sc-title-sm mb-3">
                        <h6>Maternity Benefits .</h6>
                      </div>
                      <p className="p-text width-minimized">
                        Female employees are entitled to maternity benefits,
                        including paid leave and medical coverage, to support
                        them during pregnancy and childbirth.
                      </p>
                    </div>
                  </div>
                  <div
                    className="sc-list-itm col-sm-6 col-xl-3 mb-4"
                    style={{ transition: "transform 0.3s ease" }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <div className="itm-circle d-flex align-items-center justify-content-center">
                      <div className="itm-icon">
                        <img src="assets/images/process/icon-2.png" alt="" />
                      </div>
                      {/* <div class="itm-val">07</div> */}
                    </div>
                    <div className="itm-text">
                      <div className="sc-title-sm mb-3">
                        <h6>Coverage against disabilities.</h6>
                      </div>
                      <p className="p-text width-minimized">
                        We offer coverage against disabilities, ensuring support
                        and assistance for employees who may face challenges due
                        to disabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ================soft skill end= */}
          {/* assets/images/Efficient administrative management.jpeg" */}
          {/* ================= */}
          <section className="sc-job-offer">
            <div className="container">
              <div className="sc-job-offer-cnt">
                <div className="sc-block row align-items-stretch">
                  <div className="sc-block-l col-lg-6">
                    <div className="block-img img-cover h-100">
                      <img
                        src="assets/images/Efficient administrative management.jpeg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="sc-block-r col-lg-6 align-self-center">
                    <div
                      className="accordion job-offer-accordion mx-3"
                      id="accordionExample"
                    >
                      {jobOffers.map((offer, index) => (
                        <div className="accordion-item" key={index}>
                          <h2
                            className="accordion-header"
                            id={"heading" + index}
                          >
                            <button
                              className={`accordion-button ${
                                activeAccordion === index ? "" : "collapsed"
                              }`}
                              type="button"
                              onClick={() => toggleAccordion(index)}
                              aria-expanded={
                                activeAccordion === index ? "true" : "false"
                              }
                              aria-controls={"collapse" + index}
                            >
                              {offer.title}
                            </button>
                          </h2>
                          <div
                            id={"collapse" + index}
                            className={`accordion-collapse collapse ${
                              activeAccordion === index ? "show" : ""
                            }`}
                            aria-labelledby={"heading" + index}
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              {offer.content}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ================= */}
          {/* <nav aria-label="" class="d-flex justify-content-center mt-5">
              <ul class="pagination">
                  <li class="page-item">
                      <a class="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                      </a>
                  </li>
                  <li class="page-item page-item-active"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                      </a>
                  </li>
              </ul>
          </nav> */}
        </div>
      </section>
      {/* end of why choose us section */}
      {/* newsletter section */}
      {/* <section class="pg-section sc-newsletter d-flex align-items-center">
      <div class="container">
          <div class="sc-newsletter-cnt mx-3" >
              <div class="sc-block text-center">
                  <h3 class='text-white fs-xx-lg'>Subscribe Our Newsletter & Get Latest News</h3>
                  <p class="p-text text-white mt-3">Increasing Your Success With Expert Human Resource Solutions                        </p>

                  <form class="subscribe-form mt-5">
                      <div class="form-elem d-sm-flex">
                          <input type="email" class="form-control" placeholder="Your Email Address">
                          <button type="submit" class="btn btn-primary mt-2 mt-sm-0">Subscribe</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </section> */}
      {/* end of newsletter section */}
      <footer className="pg-footer py-5" id="footer">
        <div className="container">
          <div className="pg-footer-content text-center text-md-start mx-3 row gx-md-5 pt-4">
            <div className="col-md-6 col-lg-3 col-xl-4">
              <div className="footer-block mb-4">
                <a href="#" className="navbar-brand">
                  <span className="fw-7 fs-xx-lg text-white">
                    BlueBells Techno{" "}
                  </span>
                </a>
                <p className="p-text text-white">
                  Bluebells Techno solutions Established in 2014. It is one of
                  the fastest growing manpower and service provider Globally.
                </p>
                <ul className="footer-socil-links d-flex mt-4 justify-content-center justify-content-md-start">
                  <li>
                    <a href="#">
                      <i className="lni lni-facebook-filled" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni lni-instagram-filled" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni lni-twitter-filled" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni lni-linkedin-original" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-2">
              <div className="footer-block mb-4">
                <h5 className="footer-block-title text-white fs-lg op-09 fw-5">
                  Other Pages
                </h5>
                <ul className="footer-links">
                  <li>
                    <a href="/home" className="text-white">
                      <span className="link-icon">
                        <i className="lni lni-chevron-right" />
                      </span>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-white">
                      <span className="link-icon">
                        <i className="lni lni-chevron-right" />
                      </span>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="text-white">
                      <span className="link-icon">
                        <i className="lni lni-chevron-right" />
                      </span>
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/capabilities" className="text-white">
                      <span className="link-icon">
                        <i className="lni lni-chevron-right" />
                      </span>
                      Capabilities
                    </a>
                  </li>
                  <li>
                    <a href="/strength" className="text-white">
                      <span className="link-icon">
                        <i className="lni lni-chevron-right" />
                      </span>
                      Strength
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-white">
                      <span className="link-icon">
                        <i className="lni lni-chevron-right" />
                      </span>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-2">
              <div className="footer-block mb-4">
                <h5 className="footer-block-title text-white fs-lg op-09 fw-5">
                  Quick Links
                </h5>
                <ul className="footer-links">
                  <li>
                    <a href="/certification" className="text-white">
                      <span className="link-icon">
                        <i className="lni lni-chevron-right" />
                      </span>
                      Certification
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3">
              <div className="footer-block mb-4">
                <h5 className="footer-block-title text-white fs-lg op-09 fw-5">
                  Contact Info
                </h5>
                <div className="info-list">
                  <div className="info-item">
                    <div className="info-item-icon text-white">
                      <i className="lni lni-phone-set" />
                    </div>
                    <div className="info-item-text text-white">
                      +91 9650920050
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-item-icon text-white">
                      <i className="lni lni-envelope" />
                    </div>
                    <div className="info-item-text text-white">
                      babrubhan@bluebellstechno.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
