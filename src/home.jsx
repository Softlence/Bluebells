import React from "react";
import Slider from "react-slick";
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import huawei from "./assets/Img/huawei.jpg"; // Adjust the paths as necessary
import samsung from "./assets/Img/samsung.png";
import nokia from "./assets/Img/nokia.png";
import ericsson from "./assets/Img/ericsson.png";
import zte from "./assets/Img/zte.jpg";
import nec from "./assets/Img/nec.png";
import ceragon from "./assets/Img/ceragon.png";

const MarqueeContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
`;

const ClientImage = styled.img`
  height: 100px;
  margin: 0 1rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h6 {
    color: #6c757d;
  }

  h2 {
    color: #000;
  }
`;
export function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const marqueeSettings = {
    dots: false,
    infinite: true,
    speed: 1000, // Adjust the speed to make the transition smooth
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    variableWidth: true,
    pauseOnHover: false,
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
                    className="pg-nav-link active text-capitalize no-wrap"
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
      {/* <div className="pg-header-content text-center">
      <div className="header-slider">
        <div className="header-slider-itm px-2">
        
          <p className="text-white lead mt-4 mb-5 op-09 px-lg-5">
            Bluebells Established in 2014. It is one of the fastest growing
            manpower and service provider Globally, With a focus on delivering
            high-quality technical and non-technical manpower to various private
            and government sectors.
          </p>
          
        </div>
        <div className="header-slider-itm px-2">
        
          <p className="text-white lead mt-4 mb-5 op-09 px-lg-5">
            At Bluebells , we understand the importance of having the right talent
            to drive business success. That is why we offer a wide range of
            manpower solutions tailored to meet the unique needs of our clients.
          </p>

        </div>
        <div className="header-slider-itm px-2">
          <h1 className="text-white display-5 fw-5 ls-1 header-slider-itm-title"></h1>
          <p className="text-white lead mt-4 mb-5 op-09 px-lg-5">
            Whether you need skilled technicians, engineers, administrators, or
            support staff, we have the expertise to deliver qualified
            professionals who can make an immediate impact on your organization.
          </p>
       
        </div>
      </div>
    </div> */}
      {/* ============ */}
      <div className="pg-header-content text-center">
        <Slider {...settings} className="header-slider">
          <div className="header-slider-itm px-2">
            <p className="text-white lead mt-4 mb-5 op-09 px-lg-5">
              Bluebells Established in 2014. It is one of the fastest growing
              manpower and service provider Globally, With a focus on delivering
              high-quality technical and non-technical manpower to various
              private and government sectors.
            </p>
          </div>
          <div className="header-slider-itm px-2">
            <p className="text-white lead mt-4 mb-5 op-09 px-lg-5">
              At Bluebells, we understand the importance of having the right
              talent to drive business success. That is why we offer a wide
              range of manpower solutions tailored to meet the unique needs of
              our clients.
            </p>
          </div>
          <div className="header-slider-itm px-2">
            <h1 className="text-white display-5 fw-5 ls-1 header-slider-itm-title"></h1>
            <p className="text-white lead mt-4 mb-5 op-09 px-lg-5">
              Whether you need skilled technicians, engineers, administrators,
              or support staff, we have the expertise to deliver qualified
              professionals who can make an immediate impact on your
              organization.
            </p>
          </div>
        </Slider>
      </div>
      {/* ============ */}
      {/* end of header content */}
      {/* features section */}
      <section className="pg-section sc-features bg-light">
        <div className="container">
          <div className="sc-features-cnt mx-3 py-5">
            <div className="sc-list row">
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="sc-list-itm text-center h-100">
                  <div className="itm-icon mx-auto">
                    <i className="lni lni-target" />
                  </div>
                  <h5 className="itm-title op-09 py-2 fs-lg">Mission</h5>
                  <p className="p-text pt-1 width-minimized">
                    Our mission at Bluebells Techno is to revolutionize the
                    manpower industry by delivering unparalleled services that
                    redefine excellence.
                  </p>
                  <a href="#" className="itm-link text-capitalize">
                    {/* <span class="fs-lg">read more</span> */}
                    <span className="ms-1 fs-md itm-link-icon">
                      {/* <i class="lni lni-chevron-right"></i> */}
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="sc-list-itm text-center h-100">
                  <div className="itm-icon mx-auto">
                    <i className="lni lni-eye" />
                  </div>
                  <h5 className="itm-title op-09 py-2 fs-lg">Vision</h5>
                  <p className="p-text pt-1 width-minimized">
                    {" "}
                    We prioritize quality, safety and client contentment. We
                    deliver safe, affordable and sustainable services to the
                    client
                  </p>
                  <a href="#" className="itm-link text-capitalize">
                    {/* <span class="fs-lg">read more</span> */}
                    <span className="ms-1 fs-md itm-link-icon">
                      {/* <i class="lni lni-chevron-right"></i> */}
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="sc-list-itm text-center h-100">
                  <div className="itm-icon mx-auto">
                    <i className="lni lni-flag-alt" />
                  </div>
                  <h5 className="itm-title op-09 py-2 fs-lg">Approach</h5>
                  <p className="p-text pt-1 width-minimized">
                    We approach the provision of people in a specialized manner,
                    collaborating closely with our clients to comprehend their
                    unique needs and offer tailored solutions.
                  </p>
                  <a href="#" className="itm-link text-capitalize">
                    {/* <span class="fs-lg">read more</span> */}
                    <span className="ms-1 fs-md itm-link-icon">
                      {/* <i class="lni lni-chevron-right"></i> */}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of features section */}
      {/* about section */}
      <section className="pg-section sc-about bg-light">
        <div className="container">
          <div className="sc-about-cnt mx-3 bg-white">
            <div className="sc-block row">
              <div className="sc-block-l col-lg-6 ps-lg-0 ms-0">
                <div className="block-img img-cover">
                  <img src="assets/images/about.png" alt="" />
                </div>
              </div>
              <div className="sc-block-r col-lg-6 d-flex align-items-center">
                <div className="block-text py-5 px-4 ps-xl-5">
                  <div className="sc-title-sm">
                    <h6 className="text-secondary">About BlueBells</h6>
                  </div>
                  <div className="sc-title">
                    <h2>Fastest Growing Man-Power Service Provider</h2>
                  </div>
                  <p className="p-text">
                    Bluebells Techno Established in 2014. It is one of the
                    fastest growing manpower and service provider Globally, With
                    a focus on delivering high-quality technical and
                    non-technical manpower to various private and government
                    sectors, we have earned a reputation for excellence and
                    reliability in the industry.
                  </p>
                  {/* <p class='p-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At placeat
                                quae quisquam minus eum molestias labore eos laborum ex nulla.</p> */}
                  <a href=".//about" className="btn text-uppercase mt-2">
                    view more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of about section */}
      {/* who choose us section */}
      <section className="pg-section sc-whyus d-flex align-items-center">
        <div className="container">
          <div className="sc-whyus-cnt mx-3">
            <div className="sc-list row mt-5">
              <div className="col-md-6 col-lg-4 col-xxl-3 mb-4 mb-xxl-0">
                <a href="/home">
                  <div className="sc-list-itm text-center h-100">
                    <div className="itm-icon mx-auto">
                      <img src="assets/images/whyus/brand.png" alt="" />
                    </div>
                    <h5 className="itm-title op-09 py-2 fs-lg text-white">
                      Telecom Manpower Augementation
                    </h5>
                    <p className="p-text pt-1 text-white width-minimized mb-0">
                      Our manpower augmentation services help organizations in
                      leveraging technology, improving efficiency and quality
                      and have also proven to be a cost effective engagement
                      methodology to sustain large teams without building them
                      in- house
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 col-xxl-3 mb-4 mb-xxl-0">
                <a href="/home">
                  <div className="sc-list-itm text-center h-100">
                    <div className="itm-icon mx-auto">
                      <img src="assets/images/whyus/digital.png" alt="" />
                    </div>
                    <h5 className="itm-title op-09 py-2 fs-lg text-white">
                      Utility Provider
                    </h5>
                    <p className="p-text pt-1 text-white width-minimized mb-0">
                      Our people are focusing better customer experiences and an
                      optimized processes
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 col-xxl-3 mb-4 mb-xxl-0">
                <a href="/home">
                  <div className="sc-list-itm text-center h-100">
                    <div className="itm-icon mx-auto">
                      <img src="assets/images/whyus/market.png" alt="" />
                    </div>
                    <h5 className="itm-title op-09 py-2 fs-lg text-white">
                      Telecom Integration
                    </h5>
                    <p className="p-text pt-1 text-white width-minimized mb-0">
                      A very large and geographically spread population, low
                      telephony penetration levels, and a rise in consumers’
                      income and spending owing to strong economic growth have
                      helped make India the fastest-growing telecom market in
                      the world.
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 col-xxl-3 mb-4 mb-xxl-0">
                <a href="/home">
                  <div className="sc-list-itm text-center h-100">
                    <div className="itm-icon mx-auto">
                      <img src="assets/images/whyus/bulb.png" alt="" />
                    </div>
                    <h5 className="itm-title op-09 py-2 fs-lg text-white">
                      SLA Based Services
                    </h5>
                    <p className="p-text pt-1 text-white width-minimized mb-0">
                      Not limited to Technology Integration we offer Onsite
                      Services (Resident Engineers), SLA based Managed Services
                      for device maintenance and more.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of why choose us section */}
      {/* blog section */}
      {/* <section class="pg-section sc-blog d-flex align-items-center bg-light">
        <div class="container">
            <div class="sc-whyus-cnt mx-3">
                <div class="text-center">
                    <div class="sc-title-sm">
                        <h6 class="text-secondary">blogs and news</h6>
                    </div>
                    <div class="sc-title">
                        <h2>Get The Latest Insights From The Industry.</h2>
                    </div>
                </div>
                <div class="sc-cards row mt-5">
                    <div class="col-lg-6 col-xl-4 mb-5 mb-xl-0">
                        <a href="#">
                            <div class="sc-list-card card h-100">
                                <div class="card-img">
                                    <img src="assets/images/blog/blog-1.jpg" alt="">
                                </div>
                                <div class="card-body py-4 px-4">
                                    <div class="card-date d-flex align-items-center">
                                        <span class="icon-sm me-2 op-07">
                                            <i class='fas fa-clock'></i>
                                        </span>
                                        <span class="op-07 fw-6">September 16, 2019</span>
                                    </div>
                                    <h5 class="card-title op-09 mb-3">How leaders can address sensitive topics with
                                        employees</h5>
                                    <p class="p-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Voluptate laborum nulla voluptates dolorem aperiam!</p>
                                    <div class="card-author">
                                        <div class='card-author-img'>
                                            <img src="assets/images/blog/author-1.jpg" alt="">
                                        </div>
                                        <div class="card-author-name fw-6 text-secondary-v1 op-08"> by <span
                                                class="fw-7">John Bakery</span></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
  
                    <div class="col-lg-6 col-xl-4 mb-5 mb-xl-0">
                        <a href="#">
                            <div class="sc-list-card card h-100">
                                <div class="card-img">
                                    <img src="assets/images/blog/blog-2.jpg" alt="">
                                </div>
                                <div class="card-body py-4 px-4">
                                    <div class="card-date d-flex align-items-center">
                                        <span class="icon-sm me-2 op-07">
                                            <i class='fas fa-clock'></i>
                                        </span>
                                        <span class="op-07 fw-6">September 16, 2019</span>
                                    </div>
                                    <h5 class="card-title op-09 mb-3">How leaders can address sensitive topics with
                                        employees</h5>
                                    <p class="p-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Voluptate laborum nulla voluptates dolorem aperiam!</p>
                                    <div class="card-author">
                                        <div class='card-author-img'>
                                            <img src="assets/images/blog/author-2.jpg" alt="">
                                        </div>
                                        <div class="card-author-name fw-6 text-secondary-v1 op-08"> by <span
                                                class="fw-7">John Bakery</span></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
  
                    <div class="col-lg-6 col-xl-4 mb-5 mb-xl-0">
                        <a href="#">
                            <div class="sc-list-card card h-100">
                                <div class="card-img">
                                    <img src="assets/images/blog/blog-3.jpg" alt="">
                                </div>
                                <div class="card-body py-4 px-4">
                                    <div class="card-date d-flex align-items-center">
                                        <span class="icon-sm me-2 op-07">
                                            <i class='fas fa-clock'></i>
                                        </span>
                                        <span class="op-07 fw-6">September 16, 2019</span>
                                    </div>
                                    <h5 class="card-title op-09 mb-3">How leaders can address sensitive topics with
                                        employees</h5>
                                    <p class="p-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Voluptate laborum nulla voluptates dolorem aperiam!</p>
                                    <div class="card-author">
                                        <div class='card-author-img'>
                                            <img src="assets/images/blog/author-3.jpg" alt="">
                                        </div>
                                        <div class="card-author-name fw-6 text-secondary-v1 op-08"> by <span
                                                class="fw-7">John Bakery</span></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
      {/* end of why choose us section */}
      {/* message section */}
      {/* <section className="pg-section py-5 sc-clients bg-white">
        <div className="container">
          <div className="sc-clients-cnt mx-3">
            <div className="text-center">
              <div className="sc-title-sm">
                <h6 className="text-secondary">The Clients</h6>
              </div>
              <div className="sc-title">
                <h2>Brand That Trust Our Service</h2>
              </div>
            </div>
            <div className="clients-slider mt-5">
              <div className="clients-slider-item">
                <img src="assets/images/huawei.jpg" alt="" />
              </div>
              <div className="clients-slider-item">
                <img src="assets/images/samsung.png" alt="" />
              </div>
              <div className="clients-slider-item">
                <img src="assets/images/nokia.png" alt="" />
              </div>
              <div className="clients-slider-item">
                <img src="assets/images/ericsson.png" alt="" />
              </div>
              <div className="clients-slider-item">
                <img src="assets/images/zte.jpg" alt="" />
              </div>
              <div className="clients-slider-item">
                <img src="assets/images/nec.png" alt="" />
              </div>
              <div className="clients-slider-item">
                <img src="assets/images/ceragon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="pg-section py-5 sc-clients bg-white">
        <div className="container">
          <div className="sc-clients-cnt mx-3">
            <Header className="text-center">
              <div className="sc-title-sm">
                <h6 className="text-secondary">The Clients</h6>
              </div>
              <div className="sc-title">
                <h2>Brands That Trust Our Service</h2>
              </div>
            </Header>
            <MarqueeContainer>
              <Slider {...marqueeSettings}>
                <div className="clients-slider-item">
                  <ClientImage src={huawei} alt="Huawei" />
                </div>
                <div className="clients-slider-item">
                  <ClientImage src={samsung} alt="Samsung" />
                </div>
                <div className="clients-slider-item">
                  <ClientImage src={nokia} alt="Nokia" />
                </div>
                <div className="clients-slider-item">
                  <ClientImage src={ericsson} alt="Ericsson" />
                </div>
                <div className="clients-slider-item">
                  <ClientImage src={zte} alt="ZTE" />
                </div>
                <div className="clients-slider-item">
                  <ClientImage src={nec} alt="NEC" />
                </div>
                <div className="clients-slider-item">
                  <ClientImage src={ceragon} alt="Ceragon" />
                </div>
              </Slider>
            </MarqueeContainer>
          </div>
        </div>
      </section>
      {/* end of message section */}
      {/* job offer section */}
      {/* <section class="sc-job-offer">
        <div class="container">
            <div class="sc-job-offer-cnt">
                <div class="sc-block row align-items-stretch">
                    <div class="sc-block-l col-lg-6">
                        <div class="block-img img-cover h-100">
                            <img src="assets/images/job-offer.jpg" alt="">
                        </div>
                    </div>
                    <div class="sc-block-r col-lg-6 align-self-center">
                        <div class="accordion job-offer-accordion mx-3" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true"
                                        aria-controls="collapseOne">
                                        be decisive
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Confirming your acceptance guarantees the job is yours. Usually there are
                                        other candidates in the process at this point so ensure you are committed.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                        aria-expanded="false" aria-controls="collapseTwo">
                                        or take your time
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse"
                                    aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Confirming your acceptance guarantees the job is yours. Usually there are
                                        other candidates in the process at this point so ensure you are committed.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                        aria-expanded="false" aria-controls="collapseThree">
                                        resign
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">Confirming your acceptance guarantees the job is
                                        yours. Usually there are other candidates in the process at this point so
                                        ensure you are committed.
                                    </div>
                                </div>
                            </div>
  
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                        aria-expanded="false" aria-controls="collapseFour">
                                        counter offers
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse"
                                    aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">Confirming your acceptance guarantees the job is
                                        yours. Usually there are other candidates in the process at this point so
                                        ensure you are committed.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
      {/* end of job offer section */}
      {/* need section */}
      {/* <section class="sc-need">
        <div class="sc-need-cnt">
            <div class="sc-block py-5 bg-light">
                <div class="container">
                    <div class="text-center">
                        <div class="sc-title-sm">
                            <h6 class="text-secondary">Need</h6>
                        </div>
                        <div class="sc-title">
                            <h2>Need A Therapy Solution Explore New Programs</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sc-block py-5 bg-light">
                <div class="container">
                    <div class="mx-3 need-tabs">
                        <div class="tabs-btn d-flex flex-column flex-wrap">
                            <button type="button" class="tab-btn tab-btn-active">
                                <span>Hiring Process</span>
                            </button>
                            <button type="button" class="tab-btn">
                                <span>Interview Procedure</span>
                            </button>
                            <button type="button" class="tab-btn">
                                <span>Requirement Matching</span>
                            </button>
                        </div>
                        <div class="tabs-body my-5">
                            <div class="tab-body tab-body-active">
                                <div class="tab-body-cnt row gx-3 gx-5 align-items-center">
                                    <div class="tab-text col-lg-6">
                                        <h6>What does recruitment involve?</h6>
                                        <p>While the recruitment process is unique to each organization, there are
                                            15 essential steps of the hiring process. We’ve listed them here, but
                                            for a detailed exploration of these steps, check out our page on Hiring
                                            Process Steps:</p>
                                        <ul>
                                            <li>Identify the hiring need</li>
                                            <li>Devise a recruitment plan</li>
                                            <li>Write a job description</li>
                                            <li>Phone Interview/Initial Screening</li>
                                            <li>Applicant Assessment</li>
                                        </ul>
                                        <a href="#"
                                            class="mt-4 fw-7 text-secondary fs-lg d-inline-flex align-items-center btn btn-secondary-outline">
                                            <span class="me-2">Learn More</span>
                                            <span class="d-flex align-items-center justify-content-center"><i
                                                    class="lni lni-arrow-right"></i></span>
                                        </a>
                                    </div>
                                    <div class="tab-img col-lg-6 img-cover mt-5 mt-lg-0">
                                        <img src="assets//images/need/ned-1.jpg" alt="">
                                    </div>
                                </div>
                            </div>
  
                            <div class="tab-body">
                                <div class="tab-body-cnt row gx-3 gx-5 align-items-center">
                                    <div class="tab-img col-lg-6 img-cover">
                                        <img src="assets/images/need/ned-2.jpg" alt="">
                                    </div>
                                    <div class="tab-text col-lg-6 mt-5 mt-lg-0">
                                        <h6>What is recruiting in HRM?</h6>
                                        <p>Human Resource Management, otherwise known as HRM or HR for short, is the
                                            function of people management within an organization. HR is responsible
                                            for facilitating the overall goals of the organization through effective
                                            administration of human capital — focusing on employees as the company's
                                            most important asset.</p>
                                        <a href="#"
                                            class="mt-4 fw-7 text-secondary fs-lg d-inline-flex align-items-center btn btn-secondary-outline">
                                            <span class="me-2">Learn More</span>
                                            <span class="d-flex align-items-center justify-content-center"><i
                                                    class="lni lni-arrow-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
  
                            <div class="tab-body">
                                <div class="tab-body-cnt row gx-3 gx-5 align-items-center">
                                    <div class="tab-img col-lg-6 img-cover">
                                        <img src="assets/images/need/ned-3.jpg" alt="">
                                    </div>
                                    <div class="tab-text col-lg-6 mt-5 mt-lg-0">
                                        <h6>What is recruitment?</h6>
                                        <p>Recruitment refers to the process of identifying, attracting,
                                            interviewing, selecting, hiring and onboarding employees. In other
                                            words, it involves everything from the identification of a staffing need
                                            to filling it.</p>
                                        <p>Depending on the size of an organization, recruitment is the
                                            responsibility of a range of workers. Larger organizations may have
                                            entire teams of recruiters, while others only a single recruiter. In
                                            small outfits, the hiring manager may be responsible for recruiting.</p>
                                        <a href="#"
                                            class="mt-4 fw-7 text-secondary fs-lg d-inline-flex align-items-center btn btn-secondary-outline">
                                            <span class="me-2">Learn More</span>
                                            <span class="d-flex align-items-center justify-content-center"><i
                                                    class="lni lni-arrow-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>  */}
      {/* end of need section */}
      {/* working process section */}
      <section className="pg-section sc-process bg-white">
        <div className="container">
          <div className="sc-process-cnt mx-3">
            <div className="text-center">
              <div className="sc-title-sm">
                <h6 className="text-primary">Why Choose Us</h6>
              </div>
              <div className="sc-title">
                <h2>
                  We provide a diverse range of services to meet the needs of
                  our clients
                </h2>
              </div>
            </div>
            <div className="sc-list mt-5 row ">
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
                </div>
                <div className="itm-text">
                  <div className="sc-title-sm mb-3">
                    <h6>Fast and Flexible</h6>
                  </div>
                  <p className="p-text width-minimized">
                    We promptly source and deploy resources to meet urgent
                    requirements because we have a large database of
                    pre-screened applicants and an efficient recruitment
                    procedure.
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
                </div>
                <div className="itm-text">
                  <div className="sc-title-sm mb-3">
                    <h6>Quality Assurance </h6>
                  </div>
                  <p className="p-text width-minimized">
                    Our stringent quality assurance processes and ISO
                    certifications ensure that we deliver only the highest
                    quality manpower solutions to our clients.
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
                </div>
                <div className="itm-text">
                  <div className="sc-title-sm mb-3">
                    <h6>Industry Expertise </h6>
                  </div>
                  <p className="p-text width-minimized">
                    With years of experience serving clients across various
                    industries, we have developed deep expertise and insights
                    into the manpower needs of different sectors.
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
                </div>
                <div className="itm-text">
                  <div className="sc-title-sm mb-3">
                    <h6>Reliability</h6>
                  </div>
                  <p className="p-text width-minimized">
                    Our track record of successfully fulfilling manpower
                    requirements for clients speaks to our reliability and
                    commitment to customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of working process section */}
      <footer className="pg-footer py-5" id="footer">
        <div className="container">
          <div className="pg-footer-content text-center text-md-start mx-3 row gx-md-5 pt-4">
            <div className="col-md-6 col-lg-3 col-xl-4">
              <div className="footer-block mb-4">
                <a href="#" className="navbar-brand">
                  <span className="fw-7 fs-xx-lg text-white">
                    BlueBells Techno
                  </span>
                </a>
                <p className="p-text text-white">
                  Bluebells Techno solutions Pvt. Ltd. Established in 2014. It
                  is one of the fastest growing manpower and service provider
                  Globally.
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
