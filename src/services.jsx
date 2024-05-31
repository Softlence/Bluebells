import { useState } from "react";
function Services() {
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
      title: "Manpower Augmentation",
      content:
        "We engage with the client at all levels to provide them with the exact match for their requirements within the committed time frame and budget.",
    },
    {
      title: "Utility Provider",
      content:
        "In the Utility Provider We are giving the services of the Electrical Works, Civil Works, Air Conditioning , Solar and DG Power Plant, Water Management and drainage system , Pest Control, Inverter and battery bank, Technical and Non Technical Manpower Provider, Telecom, IT and software solutions.",
    },
    {
      title: "Telecom Integration",
      content:
        "A very large and geographically spread population, low telephony penetration levels, and a rise in consumers’ income and spending owing to strong economic growth have helped make India the fastest-growing telecom market in the world.",
    },
    {
      title: "SLA based Service",
      content:
        "We also consult to provide Networking Integration and Storage Solutions for customers across all verticals as our personnel’s experience of managing critical equipment with stringent Services Level Agreement parameters holds us in good stead.",
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
                    className="pg-nav-link  active  text-capitalize no-wrap"
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
            <h4 className="header-breadcrumb-title">Services</h4>
            <nav
              aria-label="breadcrumb"
              className="d-flex justify-content-center align-items-center mt-2"
            >
              <ol className="breadcrumb">
                {/* <li class="breadcrumb-item"><a href="#">Home</a></li> */}
                {/* <li class="breadcrumb-item active" aria-current="page">Services</li> */}
              </ol>
            </nav>
            <p className="p-text header-breadcrumb-p">
              We Specialize in providing comprehensive manpower solutions
              tailored to the needs of various organizations and companies
              across different sectors. With a focus on delivering excellence,
              we offer top-notch manpower services to the following industries.
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
                {/* <h6 class="text-secondary">Our Services </h6> */}
              </div>
              <div className="sc-title">
                <h2> Our Services</h2>
              </div>
            </div>
            <div className="sc-cards row mt-5">
              <div className="col-lg-6 col-xl-4 mb-5">
                <a href="#">
                  <div className="sc-list-card card h-100">
                    <div className="card-img">
                      <img src="assets/images/Telecom.png" alt="" />
                    </div>
                    <div className="card-body py-4 px-4">
                      <div className="card-date d-flex align-items-center">
                        <span className="icon-sm me-2 op-07">
                          {/* <i class='fas fa-clock'></i> */}
                        </span>
                        {/* <span class="op-07 fw-6">September 16, 2019</span> */}
                      </div>
                      <h5 className="card-title op-09 mb-3">Telecom Sector</h5>
                      <p className="p-text">
                        In the rapidly evolving telecom industry,having the
                        right manpower is crucial for success. We provide
                        skilled and dedicated personel to support telecom
                        companies in various capacities,ensuring smooth
                        operations and efficient service delivery.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-xl-4 mb-5">
                <a href="#">
                  <div className="sc-list-card card h-100">
                    <div className="card-img">
                      <img src="assets/images/Alltypes.png" alt="" />
                    </div>
                    <div className="card-body py-4 px-4">
                      <div className="card-date d-flex align-items-center">
                        <span className="icon-sm me-2 op-07">
                          {/* <i class='fas fa-clock'></i> */}
                        </span>
                        {/* <span class="op-07 fw-6">September 16, 2019</span> */}
                      </div>
                      <h5 className="card-title op-09 mb-3">
                        All Types of industries
                      </h5>
                      <p className="p-text">
                        Regardless of the industry you operate it ,we have the
                        manpower solution you need From manufacturing to
                        retail,from IT to hospitality , we offer a diverse range
                        of manpower services to meet the unique requirements of
                        different industries.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-xl-4 mb-5">
                <a href="#">
                  <div className="sc-list-card card h-100">
                    <div className="card-img">
                      <img src="assets/images/Health.png" alt="" />
                    </div>
                    <div className="card-body py-4 px-4">
                      <div className="card-date d-flex align-items-center">
                        <span className="icon-sm me-2 op-07">
                          {/* <i class='fas fa-clock'></i> */}
                        </span>
                        {/* <span class="op-07 fw-6">September 16, 2019</span> */}
                      </div>
                      <h5 className="card-title op-09 mb-3">Hospitals </h5>
                      <p className="p-text">
                        Healthcare institutions rely on qualified and
                        compassionate professionals to deliver quality care to
                        patients. We undestand the importance of having the
                        right personnel in healthcare settings,and we provide
                        trained healthcare professionals to hospitals,clincs,and
                        medical facilities.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-xl-4 mb-5">
                <a href="#">
                  <div className="sc-list-card card h-100">
                    <div className="card-img">
                      <img src="assets/images/Educ.png" alt="" />
                    </div>
                    <div className="card-body py-4 px-4">
                      <div className="card-date d-flex align-items-center">
                        <span className="icon-sm me-2 op-07">
                          {/* <i class='fas fa-clock'></i> */}
                        </span>
                        {/* <span class="op-07 fw-6">September 16, 2019</span> */}
                      </div>
                      <h5 className="card-title op-09 mb-3">
                        Educational Institutions
                      </h5>
                      <p className="p-text">
                        The educations sector plays a crucial role in shaping
                        the future, and we are dedicated to supporting
                        educational institutions with skilled manpower
                        solutions.Whether you need teaching staff,administrative
                        personnel,or support staff, we have got you coverd{" "}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* ===================== */}
          <section className="pg-section sc-process bg-white">
            <div className="container">
              <div className="sc-process-cnt mx-3">
                <div className="text-center">
                  <div className="sc-title-sm">
                    <h6 className="text-primary">Our Services</h6>
                  </div>
                  <div className="sc-title">
                    <h2>
                      We provide a diverse range of services to meet the needs
                      of our clients. Here is an overview of what we offer
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
                        <h6> Electrical Service</h6>
                      </div>
                      <p className="p-text width-minimized">
                        {" "}
                        . From installations to repairs, our electrical works
                        cover a wide spectrum of needs to ensure safety and
                        efficiency.
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
                        <h6>Civil Services</h6>
                      </div>
                      <p className="p-text width-minimized">
                        Our civil works encompass construction, maintenance, and
                        renovation projects, delivering quality results tailored
                        to our clients specifications.
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
                        <h6>Air Conditioning Solutions </h6>
                      </div>
                      <p className="p-text width-minimized">
                        We offer comprehensive air conditioning services,
                        including installation, maintenance, and repair, to keep
                        your spaces cool and comfortable
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
                        <h6>Solar and DG Power Plants</h6>
                      </div>
                      <p className="p-text width-minimized">
                        Harness the power of renewable energy with our solar and
                        DG power plant solutions, providing sustainable and
                        reliable power sources
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
                        <h6> Water Management and Drainage Systems</h6>
                      </div>
                      <p className="p-text width-minimized">
                        Our expertise in water management and drainage systems
                        ensures effective solutions for maintaining proper water
                        flow and drainage
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
                        <h6>Pest Control Services.</h6>
                      </div>
                      <p className="p-text width-minimized">
                        We Provide Pest Control solutions to protect your
                        premises from unwanted pests and ensure a hygienic
                        environment.
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
                        <h6>Inverter and Battery Bank</h6>
                      </div>
                      <p className="p-text width-minimized">
                        Our inverter and battery bank services offer reliable
                        backup power solutions for uninterrupted operations
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
                      {/* <div class="itm-val">08</div> */}
                    </div>
                    <div className="itm-text">
                      <div className="sc-title-sm mb-3">
                        <h6>Technical and Non-Technical Manpower</h6>
                      </div>
                      <p className="p-text width-minimized">
                        {" "}
                        As a leading manpower provider, we supply skilled
                        professionals for both technical and non-technical roles
                        to meet your staffing needs
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
                      {/* <div class="itm-val">09</div> */}
                    </div>
                    <div className="itm-text">
                      <div className="sc-title-sm mb-3">
                        <h6>Telecom,IT and Software Solutions</h6>
                      </div>
                      <p className="p-text width-minimized">
                        Our comprehensive telecom, IT, and software solutions
                        cater to diverse business requirements, ensuring
                        seamless operations and productivity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ===================== */}
          {/* ================= */}
          <section className="sc-job-offer">
            <div className="container">
              <div className="sc-job-offer-cnt">
                <div className="sc-block row align-items-stretch">
                  <div className="sc-block-l col-lg-6">
                    <div className="block-img img-cover h-100">
                      <img src="assets/images/job-offer.jpg" alt="" />
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
            <div class="sc-newsletter-cnt mx-3">
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
export default Services;
