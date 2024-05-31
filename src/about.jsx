// import { useState } from 'react';
import Slider from "react-slick";
function About() {
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseOver = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseOut = () => {
  //   setIsHovered(false);
  // };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
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
                    className="pg-nav-link active text-capitalize no-wrap"
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
            <h4 className="header-breadcrumb-title">About Us</h4>
            <nav
              aria-label="breadcrumb"
              className="d-flex justify-content-center align-items-center mt-2"
            >
              <ol className="breadcrumb">
                {/* <li class="breadcrumb-item"><a href="#">Home</a></li> */}
                {/* <li class="breadcrumb-item active" aria-current="page">About Us</li> */}
              </ol>
            </nav>
            <p className="p-text header-breadcrumb-p">
              Bluebells Techno Established in 2014. It is one of the fastest
              growing manpower and service provider Globally, With a focus on
              delivering high-quality technical and non-technical manpower to
              various private and government sectors, we have earned a
              reputation for excellence and reliability in the industry.
            </p>
          </div>
        </div>
      </div>
      {/* end of header content */}
      <div className="pg-header-content text-center">
        <Slider {...settings} className="header-slider">
          <div className="header-slider-itm px-2">
            <h1 className="text-white display-5 fw-5 ls-1 header-slider-itm-title" />
            <p className="text-white lead mt-4 mb-5 op-09 px-lg-5">
              Bluebells Technosolutions Pvt. Ltd. Established in 2014. It is one
              of the fastest growing manpower and service provider in India.
            </p>
          </div>
          <div className="header-slider-itm px-2">
            <h1 className="text-white display-5 fw-5 ls-1 header-slider-itm-title" />
            <p className="text-white lead mt-4 mb-5 op-09 px-lg-5">
              We had started our business modestly by installation and
              commissioning of various services like all electrical works, civil
              works, air conditioning, DG maintenance, plumbing, pest control,
              etc., to various companies, hospitals, industries, and the public
              sector.
            </p>
          </div>
          <div className="header-slider-itm px-2">
            <h1 className="text-white display-5 fw-5 ls-1 header-slider-itm-title" />
            <p className="text-white lead mt-4 mb-5 op-09 px-lg-5">
              We are providing technical and non-technical manpower to various
              private and government sectors. As an approved partner of HPE, we
              provide end-to-end solutions in IT and software.
            </p>
          </div>
        </Slider>
      </div>
      {/* about section */}
      {/* <section class='pg-section sc-about bg-light'>
      <div class='container'>
          <div class='sc-about-cnt mx-3 bg-white'>
              <div class="sc-block row">
                  <div class="sc-block-l col-lg-6 ps-lg-0 ms-0">
                      <div class="block-img img-cover">
                          <img src="assets/images/about-img.jpg" alt="">
                      </div>
                  </div>
                  <div class="sc-block-r col-lg-6 d-flex align-items-center">
                      <div class="block-text py-5 px-4 ps-xl-5">
                          <div class="sc-title-sm">
                              <h6 class="text-secondary">About Recursos</h6>
                          </div>
                          <div class="sc-title">
                              <h2>Finding The Jobs That You Have Been Dreaming</h2>
                          </div>
                          <p class="p-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, totam?
                              Molestiae maiores dolor molestias laboriosam aut, voluptatum odio corporis? Harum
                              consectetur officiis rem necessitatibus quasi voluptatum magni repellendus
                              repudiandae voluptas!</p>
                          <p class='p-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At placeat
                              quae quisquam minus eum molestias labore eos laborum ex nulla.</p>
                          <a href="#" class='btn text-uppercase mt-2'>view more</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section> */}
      {/* end of about section */}
      {/* ================= */}
      {/* ================= */}
      {/* clients section */}
      {/* <section class='pg-section py-5 sc-clients bg-white'>
      <div class="container">
          <div class='sc-clients-cnt mx-3'>
              <div class="text-center">
                  <div class="sc-title-sm">
                      <h6 class="text-secondary">The Clients</h6>
                  </div>
                  <div class="sc-title">
                      <h2>Brand That Trust Our Service</h2>
                  </div>
              </div>
              <div class="clients-slider mt-5">
                  <div class='clients-slider-item'>
                      <img src="assets/images/huawei.jpg" alt="">
                  </div>
                  <div class='clients-slider-item'>
                      <img src="assets/images/samsung.png" alt="">
                  </div>
                  <div class='clients-slider-item'>
                      <img src="assets/images/nokia.png" alt="">
                  </div>
                  <div class='clients-slider-item'>
                      <img src="assets/images/ericsson.png" alt="">
                  </div>
                  <div class='clients-slider-item'>
                      <img src="assets/images/zte.jpg" alt="">
                  </div>
                  <div class='clients-slider-item'>
                      <img src="assets/images/nec.png" alt="">
                  </div>
                  <div class='clients-slider-item'>
                      <img src="assets/images/ceragon.png" alt="">
                  </div>
              </div>
          </div>
      </div>
  </section> */}
      {/* end of clients section */}
      {/* ============== */}
      <section className="sc-need">
        <div className="sc-need-cnt">
          <div className="sc-block py-5 bg-light">
            <div className="container">
              <div className="text-center">
                <div className="sc-title-sm">
                  {/* <h6 class="text-secondary">Need</h6> */}
                </div>
                {/* <div class="sc-title">
                          <h2>Need A Therapy Solution Explore New Programs</h2>
                      </div>  */}
              </div>
            </div>
          </div>
          {/* <div class="sc-block py-5 bg-light">
              <div class="container">
                  <div class="mx-3 need-tabs">
                     
                      <div class="tabs-body my-5">
                          <div class="tab-body tab-body-active">
                              <div class="tab-body-cnt row gx-3 gx-5 align-items-center">
                                  <div class="tab-text col-lg-6">
                                      <h6>The promoters have both national and international experience </h6>
                                      <p>All the work is done by highly professional team of engineers who have years of experience in the field of telecom. As of now we have around 15 teams which are equipped with the latest Tools being used for installation and commissioning of various telecom equipments.</p>
                                      <ul>
                                          <li>Survey of Wireless Mobile and Fixed line systems</li>
                                          <li>Planning of Wireless links</li>
                                          <li>Installation of Mobile and fixed infrastructures</li>
                                          <li>Acceptance and Testing of Infrastructure</li>
                                          <li>Commissioning of Wireless infrastructure</li>
                                          <li>Training of Engineers</li>
                                      </ul>
                                    
                                  </div>
                                  <div class="tab-img col-lg-6 img-cover mt-5 mt-lg-0">
                                      <img src="assets//images/need/ned-1.jpg" alt="">
                                  </div>
                              </div>
                          </div>

                         
                      </div>
                  </div>
              </div>
          </div> */}
        </div>
      </section>
      {/* ==================== */}
      <section className="pg-section sc-process bg-white">
        <div className="container">
          <div className="sc-process-cnt mx-3">
            <div className="text-center">
              <div className="sc-title-sm">
                <h6 className="text-primary">
                  Innovative Approach to Staff Motivation and Skill Development
                </h6>
              </div>
              <div className="sc-title">
                <h2>
                  We foster an environment where our employees are not just team
                  members, but valued partners in our business journey. We
                  believe in empowering our staff members and providing them
                  with opportunities for skill development and growth
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
                    <h6> Partnering with Employees</h6>
                  </div>
                  <p className="p-text width-minimized">
                    We cultivate a culture where employees feel like valued
                    partners, ensuring that their contributions are recognized
                    and appreciated
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
                    <h6>Encouraging Creativity</h6>
                  </div>
                  <p className="p-text width-minimized">
                    We actively promote an innovative and creative atmosphere
                    within our office, encouraging employees to think outside
                    the box and explore new ideas.
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
                    <h6>Dynamic Policy Updates</h6>
                  </div>
                  <p className="p-text width-minimized">
                    Our company policies are regularly updated to address
                    employee grievances and enhance supervisor-employee
                    relationships, ensuring a supportive and inclusive work
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
                    <img src="assets/images/process/icon-4.png" alt="" />
                  </div>
                  {/* <div class="itm-val">04</div> */}
                </div>
                <div className="itm-text">
                  <div className="sc-title-sm mb-3">
                    <h6>Fair Compensation and Appealing Workspace</h6>
                  </div>
                  <p className="p-text width-minimized">
                    We ensure that every employee is compensated fairly for
                    their contributions, and we strive to create an office
                    environment that is appealing and conducive to productivity.
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
                    <h6> Recognition and Reward</h6>
                  </div>
                  <p className="p-text width-minimized">
                    We believe in the power of positive reinforcement and make
                    it a point to praise and recognize employees who excel in
                    their work. Positive feedback is highly valued and
                    encouraged.
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
                    <h6>Monetary Incentives</h6>
                  </div>
                  <p className="p-text width-minimized">
                    {" "}
                    In addition to recognition, we reward our employees with
                    monetary incentives based on their performance, motivating
                    them to strive for excellence.
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
                    <h6>Family Connect Program</h6>
                  </div>
                  <p className="p-text width-minimized">
                    We organize quarterly family connect programs to provide
                    insights into the nature of our employees work to their
                    family members, fostering a sense of support and
                    understanding outside the office.
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
      {/* ==================== */}
      {/* <section class="sc-need">
      <div class="sc-need-cnt">
          <div class="sc-block py-5 bg-light">
              <div class="container">
                  <div class="text-center">
                      <div class="sc-title-sm">
                         
                      </div>
                      <div class="sc-title">
                          <h2>In past the company have carried out the installation of both GSM and CDMA infrastructure consisting</h2>
                      </div> 
                  </div>
              </div>
          </div>
          <div class="sc-block py-5 bg-light">
              <div class="container">
                  <div class="mx-3 need-tabs">
                     
                      <div class="tabs-body my-5">
                          <div class="tab-body tab-body-active">
                              <div class="tab-body-cnt row gx-3 gx-5 align-items-center">
                                  <div class="tab-text col-lg-6">
                                      <h6>
                                      </h6>
                                      <p>The company is well equipped to carry out the installation jobs all over India. We also have partners in some parts of India to carry out the jobs on our behalf.The company has a unique advantage of providing the high quality work at reasonable cost. We have been able to get many large orders because of our quality of work, dedication and support.</p>
                                      <ul>
                                          <li>MSC</li>
                                          <li>BSC</li>
                                          <li>BTS</li>
                                          <li>Tran coders</li>
                                          <li>Radio Links</li>
                                          <li>Fixed line terminals</li>
                                          <li>Optical fiber cables</li>
                                          <li>Towers</li>
                                          <li>BTS software etc</li>
                                      </ul>
                                    
                                  </div>
                                  <div class="tab-img col-lg-6 img-cover mt-5 mt-lg-0">
                                      <img src="assets//images/need/ned-1.jpg" alt="">
                                  </div>
                              </div>
                          </div>

                         
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>   */}
      {/* ============== */}
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
                    <a href="certification.html" className="text-white">
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
export default About;
