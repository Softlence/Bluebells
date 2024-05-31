export function Strength() {
  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = "translateY(-15px)";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
  };
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
                    className="pg-nav-link text-capitalize no-wrap"
                  >
                    Services
                  </a>
                </li>
                <li className="pg-nav-item">
                  <a
                    href="/capabilities"
                    className="pg-nav-link text-capitalize no-wrap"
                  >
                    Capabalities
                  </a>
                </li>
                <li className="pg-nav-item">
                  <a
                    href="/strength"
                    className="pg-nav-link  active text-capitalize no-wrap"
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
            <h4 className="header-breadcrumb-title">Strength </h4>
            <nav
              aria-label="breadcrumb"
              className="d-flex justify-content-center align-items-center mt-2"
            >
              <ol className="breadcrumb">
                {/* <li class="breadcrumb-item"><a href="#">Home</a></li> */}
                {/* <li class="breadcrumb-item active" aria-current="page">Strength</li> */}
              </ol>
            </nav>
            <p className="p-text header-breadcrumb-p">
              We take pride in our strengths that set us apart in the industry.
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
                {/* <h6 class="text-secondary">Our Technical Skill</h6> */}
              </div>
              {/* <div class="sc-title">
                        <h2>Top Five Technical Support Engineer Skills.</h2>
                    </div> */}
            </div>
            <div className="sc-cards row mt-5">
              <div className="col-lg-6 col-xl-4 mb-5">
                <a href="#">
                  <div className="sc-list-card card h-100">
                    <div className="card-img">
                      <img
                        src="assets/images/extensive experience.jpg"
                        alt=""
                      />
                    </div>
                    <div className="card-body py-4 px-4">
                      <div className="card-date d-flex align-items-center">
                        <span className="icon-sm me-2 op-07">
                          {/* <i class='fas fa-clock'></i> */}
                        </span>
                        {/* <span class="op-07 fw-6">September 16, 2019</span> */}
                      </div>
                      <h5 className="card-title op-09 mb-3">
                        Extensive Experience
                      </h5>
                      <p className="p-text">
                        With over 16 years of professional personnel management
                        experience, we bring a wealth of knowledge and expertise
                        to every client engagement.
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
                        src="assets/images/outsourcing services.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="card-body py-4 px-4">
                      <div className="card-date d-flex align-items-center">
                        <span className="icon-sm me-2 op-07">
                          {/* <i class='fas fa-clock'></i> */}
                        </span>
                        {/* <span class="op-07 fw-6">September 16, 2019</span> */}
                      </div>
                      <h5 className="card-title op-09 mb-3">
                        {" "}
                        Customized Outsourcing Services
                      </h5>
                      <p className="p-text">
                        We offer tailored outsourcing solutions to meet the
                        unique workforce needs of our clients, ensuring
                        flexibility and scalability.
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
                        <span className="icon-sm me-2 op-07">
                          {/* <i class='fas fa-clock'></i> */}
                        </span>
                        {/* <span class="op-07 fw-6">September 16, 2019</span> */}
                      </div>
                      <h5 className="card-title op-09 mb-3">
                        Quality Talent Acquisition
                      </h5>
                      <p className="p-text">
                        Our experienced team of recruiters ensures a continuous
                        supply of high-quality talent, sourced through a
                        rigorous selection process.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-xl-4 mb-5">
                <a href="#">
                  <div className="sc-list-card card h-100">
                    <div className="card-img">
                      <img src="assets/images/blog/blog-1.jpg" alt="" />
                    </div>
                    <div className="card-body py-4 px-4">
                      <div className="card-date d-flex align-items-center">
                        <span className="icon-sm me-2 op-07">
                          {/* <i class='fas fa-clock'></i> */}
                        </span>
                        {/* <span class="op-07 fw-6">September 16, 2019</span> */}
                      </div>
                      <h5 className="card-title op-09 mb-3">
                        PAN India Presence
                      </h5>
                      <p className="p-text">
                        With a nationwide presence, we are well-positioned to
                        serve clients across India, delivering our services with
                        consistency and reliability.
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
                        src="assets/images/end to end it-non it recritment.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="card-body py-4 px-4">
                      <div className="card-date d-flex align-items-center">
                        <span className="icon-sm me-2 op-07">
                          {/* <i class='fas fa-clock'></i> */}
                        </span>
                        {/* <span class="op-07 fw-6">September 16, 2019</span> */}
                      </div>
                      <h5 className="card-title op-09 mb-3">
                        End-to-End IT/Non- IT Recruitment
                      </h5>
                      <p className="p-text">
                        We provide comprehensive IT recruitment services,
                        covering the entire recruitment lifecycle from sourcing
                        to onboarding, to meet the evolving needs of our clients{" "}
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
                        src="assets/images/statutory compliance assistance.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="card-body py-4 px-4">
                      <div className="card-date d-flex align-items-center">
                        <span className="icon-sm me-2 op-07">
                          {/* <i class='fas fa-clock'></i> */}
                        </span>
                        {/* <span class="op-07 fw-6">September 16, 2019</span> */}
                      </div>
                      <h5 className="card-title op-09 mb-3">
                        Statutory Compliance Assistance
                      </h5>
                      <p className="p-text">
                        We help our clients achieve 100% statutory compliance,
                        ensuring adherence to all legal and regulatory
                        requirements{" "}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-xl-4 mb-5">
                <a href="#">
                  <div className="sc-list-card card h-100">
                    <div className="card-img">
                      <img src="assets/images/TA (2).png" alt="" />
                    </div>
                    <div className="card-body py-4 px-4">
                      <div className="card-date d-flex align-items-center">
                        <span className="icon-sm me-2 op-07">
                          {/* <i class='fas fa-clock'></i> */}
                        </span>
                        {/* <span class="op-07 fw-6">September 16, 2019</span> */}
                      </div>
                      <h5 className="card-title op-09 mb-3">
                        SLA-Based Approach
                      </h5>
                      <p className="p-text">
                        Our approach is based on service level agreements (SLAs)
                        and flexible reporting, allowing us to deliver results
                        in line with our clients expectations and business
                        objectives{" "}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
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
      <section className="pg-section sc-process bg-white">
        <div className="container">
          <div className="sc-process-cnt mx-3">
            <div className="text-center">
              <div className="sc-title-sm">
                <h6 className="text-primary">Healthy &amp; Safety</h6>
              </div>
              <div className="sc-title">
                <h2>
                  We prioritize the health and safety of our employees,
                  customers, and visitors. Here is how we ensure a safe and
                  secure environment
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
                    <h6> ISO Certifications</h6>
                  </div>
                  <p className="p-text width-minimized">
                    We are proud to be certified under ISO 45001:2018 and ISO
                    9001:2015, demonstrating our commitment to maintaining high
                    standards of health and safety management
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
                    <h6>Safety Policy Review</h6>
                  </div>
                  <p className="p-text width-minimized">
                    We conduct an annual review of our Safety Policy to set and
                    uphold stringent standards of construction and installation
                    safety.
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
                    <h6>Risk Assessment and Control</h6>
                  </div>
                  <p className="p-text width-minimized">
                    We systematically identify hazards, assess risks, and
                    implement control procedures to mitigate potential risks and
                    ensure a safe working environment.
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
                    <h6>Communication and Training</h6>
                  </div>
                  <p className="p-text width-minimized">
                    We ensure that all stakeholders are adequately informed of
                    risks and receive appropriate instruction, training, and
                    supervision to effectively manage safety concern.
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
                    <h6> Documentation and Review</h6>
                  </div>
                  <p className="p-text width-minimized">
                    We document and review risk assessments regularly to ensure
                    continuous improvement and adherence to safety protocols
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
                    <h6>Implementation and Monitoring</h6>
                  </div>
                  <p className="p-text width-minimized">
                    We implement our safety policy through codes of practice,
                    schedules, guidance notes, and training programs. We
                    continually monitor and review the effectiveness of controls
                    to maintain safety standards.
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
                    <h6>Health and Safety Coordinator</h6>
                  </div>
                  <p className="p-text width-minimized">
                    We appoint trained health and safety coordinators to oversee
                    compliance with local and international standards across all
                    sites.
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
                    <h6>Safety Resources</h6>
                  </div>
                  <p className="p-text width-minimized">
                    We provide all personnel with necessary safety resources,
                    including Personal Protective Equipment (PPE), and ensure
                    they receive appropriate training to carry out their
                    functions safely
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* newsletter section */}
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
                  Bluebells Techno Established in 2014. It is one of the fastest
                  growing manpower and service provider Globally.
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
                      Strength{" "}
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
                    <a href="certification.html" className="text-white">
                      <span className="link-icon">
                        <i className="lni lni-chevron-right" />
                      </span>
                      Certifications
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
