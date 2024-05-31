export function Certification() {
  const flexContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "120px",
    flexDirection: "row", // Default direction is row
  };

  // Media query for mobile view
  const mobileViewStyle = {
    "@media (max-width: 768px)": {
      // Adjust the breakpoint as needed
      flexDirection: "column", // Change to column in mobile view
      alignItems: "center", // Center items in column layout
    },
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
                    href="/about"
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
            <h4 className="header-breadcrumb-title">Certifications </h4>
            <nav
              aria-label="breadcrumb"
              className="d-flex justify-content-center align-items-center mt-2"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Certifications
                </li>
              </ol>
            </nav>
            <p className="p-text header-breadcrumb-p">
              We are proud to hold various certifications and licenses that
              reflect our commitment to excellence and compliance.
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
                      <img src="assets/images/gst.webp" alt="" />
                    </div>
                    <div className="card-body py-4 px-4">
                      <div className="card-date d-flex align-items-center">
                        <span className="icon-sm me-2 op-07">
                          {/* <i class='fas fa-clock'></i> */}
                        </span>
                        {/* <span class="op-07 fw-6">September 16, 2019</span> */}
                      </div>
                      <h5 className="card-title op-09 mb-3">GSTN No</h5>
                      <p className="p-text">
                        Our Goods and Services Tax Identification Number (GSTN)
                        is 07AAFCB9790C1ZJ, ensuring compliance with tax
                        regulations and transparency in our business operations.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-xl-4 mb-5">
                <a href="#">
                  <div className="sc-list-card card h-100">
                    <div className="card-img">
                      <img src="assets/images/epf.jpg" alt="" />
                    </div>
                    <div className="card-body py-4 px-4">
                      <div className="card-date d-flex align-items-center">
                        <span className="icon-sm me-2 op-07">
                          {/* <i class='fas fa-clock'></i> */}
                        </span>
                        {/* <span class="op-07 fw-6">September 16, 2019</span> */}
                      </div>
                      <h5 className="card-title op-09 mb-3"> PF No</h5>
                      <p className="p-text">
                        We are registered under the Employees Provident Fund
                        Organization (EPFO) with PF No DSNHP1555436000,
                        demonstrating our commitment to employee welfare and
                        financial security.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-xl-4 mb-5">
                <a href="#">
                  <div className="sc-list-card card h-100">
                    <div className="card-img">
                      <img src="assets/images/Untitled (30).png" alt="" />
                    </div>
                    <div className="card-body py-4 px-4">
                      <div className="card-date d-flex align-items-center">
                        <span className="icon-sm me-2 op-07">
                          {/* <i class='fas fa-clock'></i> */}
                        </span>
                        {/* <span class="op-07 fw-6">September 16, 2019</span> */}
                      </div>
                      <h5 className="card-title op-09 mb-3">ESIC No</h5>
                      <p className="p-text">
                        Our Employee State Insurance Corporation (ESIC) No is
                        20001248170001099, ensuring that our employees have
                        access to healthcare benefits and insurance coverage
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-xl-4 mb-5">
                <a href="#">
                  <div className="sc-list-card card h-100">
                    <div className="card-img">
                      <img src="assets/images/pan no.png" alt="" />
                    </div>
                    <div className="card-body py-4 px-4">
                      <div className="card-date d-flex align-items-center">
                        <span className="icon-sm me-2 op-07">
                          {/* <i class='fas fa-clock'></i> */}
                        </span>
                        {/* <span class="op-07 fw-6">September 16, 2019</span> */}
                      </div>
                      <h5 className="card-title op-09 mb-3">PAN No</h5>
                      <p className="p-text">
                        Our Permanent Account Number (PAN) is AAFCB9790,
                        providing a unique identification for tax purposes and
                        financial transactions.
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
                        Pest Control License
                      </h5>
                      <p className="p-text">
                        We hold a valid Pest Control License, ensuring
                        compliance with health and safety regulations to
                        maintain a hygienic work environment.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-xl-4 mb-5">
                <a href="#">
                  <div className="sc-list-card card h-100">
                    <div className="card-img">
                      <img src="assets/images/Licence.png" alt="" />
                    </div>
                    <div className="card-body py-4 px-4">
                      <div className="card-date d-flex align-items-center">
                        <span className="icon-sm me-2 op-07">
                          {/* <i class='fas fa-clock'></i> */}
                        </span>
                        {/* <span class="op-07 fw-6">September 16, 2019</span> */}
                      </div>
                      <h5 className="card-title op-09 mb-3">
                        Electrical License
                      </h5>
                      <p className="p-text">
                        We are authorized by the Delhi Government with an
                        Electrical License, ensuring compliance with electrical
                        safety standards and regulations
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-xl-4 mb-5">
                <a href="#">
                  <div className="sc-list-card card h-100">
                    <div className="card-img">
                      <img src="assets/images/iso certification.webp" alt="" />
                    </div>
                    <div className="card-body py-4 px-4">
                      <div className="card-date d-flex align-items-center">
                        <span className="icon-sm me-2 op-07">
                          {/* <i class='fas fa-clock'></i> */}
                        </span>
                        {/* <span class="op-07 fw-6">September 16, 2019</span> */}
                      </div>
                      <h5 className="card-title op-09 mb-3">
                        ISO Certifications
                      </h5>
                      <p className="p-text">
                        We are certified under ISO 9001:2015 for quality
                        management systems and ISO 45001:2018 for occupational
                        health and safety management systems, demonstrating our
                        commitment to maintaining high standards of quality,
                        safety, and excellence.
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
      {/* <section class="pg-section sc-process bg-white">
        <div class="container">
            <div class="sc-process-cnt mx-3">
                <div class="text-center">
                    <div class="sc-title-sm">
                        <h6 class="text-primary">Innovative Approach to Staff Motivation and Skill Development</h6>
                    </div>
                    <div class="sc-title">
                        <h2>We foster an environment where our employees are not just team members, but valued partners in our business journey. We believe in empowering our staff members and providing them with opportunities for skill development and growth
                        </h2>
                    </div>
                </div>
  
                <div class="sc-list mt-5 row">
                    <div class="sc-list-itm col-sm-6 col-xl-3 mb-4">
                        <div class="itm-circle d-flex align-items-center justify-content-center">
                            <div class="itm-icon">
                                <img src="assets/images/process/icon-1.png" alt="">
                            </div>
                          
                        </div>
                        <div class="itm-text">
                            <div class="sc-title-sm mb-3">
                                <h6> Partnering with Employees</h6>
                            </div>
                            <p class="p-text width-minimized"> 
                                We cultivate a culture where employees feel like valued partners, ensuring that their contributions are recognized and appreciated
                            </p>
                        </div>
                    </div>
  
                    <div class="sc-list-itm col-sm-6 col-xl-3 mb-4">
                        <div class="itm-circle d-flex align-items-center justify-content-center">
                            <div class="itm-icon">
                                <img src="assets/images/process/icon-2.png" alt="">
                            </div>
                          
                        </div>
                        <div class="itm-text">
                            <div class="sc-title-sm mb-3">
                                <h6>Encouraging Creativity</h6>
                            </div>
                            <p class="p-text width-minimized">
                                We actively promote an innovative and creative atmosphere within our office, encouraging employees to think outside the box and explore new ideas.
  
                                
  
                            </p>
                        </div>
                    </div>
  
                    <div class="sc-list-itm col-sm-6 col-xl-3 mb-4">
                        <div class="itm-circle d-flex align-items-center justify-content-center">
                            <div class="itm-icon">
                                <img src="assets/images/process/icon-3.png" alt="">
                            </div>
                          >
                        </div>
                        <div class="itm-text">
                            <div class="sc-title-sm mb-3">
                                <h6>Dynamic Policy Updates</h6>
                            </div>
                            <p class="p-text width-minimized">Our company policies are regularly updated to address employee grievances and enhance supervisor-employee relationships, ensuring a supportive and inclusive work environment.
  
  
                            </p>
                        </div>
                    </div>
  
                    <div class="sc-list-itm col-sm-6 col-xl-3 mb-4">
                        <div class="itm-circle d-flex align-items-center justify-content-center">
                            <div class="itm-icon">
                                <img src="assets/images/process/icon-4.png" alt="">
                            </div>
                          
                        </div>
                        <div class="itm-text">
                            <div class="sc-title-sm mb-3">
                                <h6>Fair Compensation and Appealing Workspace</h6>
                            </div>
                            <p class="p-text width-minimized">We ensure that every employee is compensated fairly for their contributions, and we strive to create an office environment that is appealing and conducive to productivity.
  
  
  
                            </p>
                        </div>
                    </div>
                     <div class="sc-list-itm col-sm-6 col-xl-3 mb-4">
                        <div class="itm-circle d-flex align-items-center justify-content-center">
                            <div class="itm-icon">
                                <img src="assets/images/process/icon-4.png" alt="">
                            </div>
                           
                        </div>
                        <div class="itm-text">
                            <div class="sc-title-sm mb-3">
                                <h6> Recognition and Reward</h6>
                            </div>
                            <p class="p-text width-minimized">We believe in the power of positive reinforcement and make it a point to praise and recognize employees who excel in their work. Positive feedback is highly valued and encouraged.
  
  
  
                            </p>
                        </div>
                    </div> 
                     <div class="sc-list-itm col-sm-6 col-xl-3 mb-4">
                        <div class="itm-circle d-flex align-items-center justify-content-center">
                            <div class="itm-icon">
                                <img src="assets/images/process/icon-4.png" alt="">
                            </div>
                         
                        </div>
                        <div class="itm-text">
                            <div class="sc-title-sm mb-3">
                                <h6>Monetary Incentives</h6>
                            </div>
                            <p class="p-text width-minimized"> In addition to recognition, we reward our employees with monetary incentives based on their performance, motivating them to strive for excellence.
  
  
  
  
                            </p>
                        </div>
                    </div> 
                     <div class="sc-list-itm col-sm-6 col-xl-3 mb-4">
                        <div class="itm-circle d-flex align-items-center justify-content-center">
                            <div class="itm-icon">
                                <img src="assets/images/process/icon-2.png" alt="">
                            </div>
                       
                        </div>
                        <div class="itm-text">
                            <div class="sc-title-sm mb-3">
                                <h6>Family Connect Program</h6>
                            </div>
                            <p class="p-text width-minimized">We appoint trained health and safety coordinators to oversee compliance with local and international standards across all sites.
  
  
  
                            </p>
                        </div>
                    </div> 
                     <div class="sc-list-itm col-sm-6 col-xl-3 mb-4">
                        <div class="itm-circle d-flex align-items-center justify-content-center">
                            <div class="itm-icon">
                                <img src="assets/images/process/icon-2.png" alt="">
                            </div>
                         
                        </div>
                        <div class="itm-text">
                            <div class="sc-title-sm mb-3">
                                <h6>Safety Resources</h6>
                            </div>
                            <p class="p-text width-minimized">We provide all personnel with necessary safety resources, including Personal Protective Equipment (PPE), and ensure they receive appropriate training to carry out their functions safely
  
  
  
                            </p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </section> */}
      {/* =============== */}
      <section className="pg-section py-5 sc-clients bg-white">
        <div className="container">
          <div className="sc-clients-cnt mx-3">
            <div className="text-center">
              <div className="sc-title-sm">
                {/* <h6 class="text-secondary">The Client</h6> */}
              </div>
              <div className="sc-title">
                <h2>Certification</h2>
              </div>
            </div>
            <div
              className="clients-slider mt-5"
              style={{ ...flexContainerStyle, ...mobileViewStyle }}
            >
              <div className="clients-slider-item">
                <img src="assets/images/Picture1.png" alt="" />
              </div>
              <div className="clients-slider-item">
                <img src="assets/images/Picture2.png" alt="" />
              </div>
              <div className="clients-slider-item">
                <img src="assets/images/Picture3.jpg" alt="" />
              </div>
              <div className="clients-slider-item">
                <img src="assets/images/Picture4.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============== */}
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
                  Bluebells Techno . Established in 2014. It is one of the
                  fastest growing manpower and service provider Globally.
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
