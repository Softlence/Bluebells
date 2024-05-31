export function Contact() {
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
                                            right: 40
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
                                        className="pg-nav-link text-capitalize no-wrap"
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
                                        className="pg-nav-link  active text-capitalize no-wrap"
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
                        <h4 className="header-breadcrumb-title">Contact Us</h4>
                        <nav
                            aria-label="breadcrumb"
                            className="d-flex justify-content-center align-items-center mt-2"
                        >
                            <ol className="breadcrumb">
                                {/* <li class="breadcrumb-item"><a href="#">Home</a></li> */}
                                {/* <li class="breadcrumb-item"><a href="#">Contact Us</a></li> */}
                            </ol>
                        </nav>
                        {/* <p class="p-text header-breadcrumb-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat dolorum ex quis veniam, odit debitis. Eius exercitationem at nam, earum corrupti aut!
                    Facere, aliquid exercitationem.</p> */}
                    </div>
                </div>
            </div>
            {/* end of header content */}
            <main className="pg-contact">
                <section className="pg-section sc-contact">
                    <div className="container">
                        <div className="sc-contact-cnt mx-3">
                            {/* <div class="sc-block sc-block-info mb-5 row gx-lg-5">
                        <div class="col-md-6 col-xl-3">
                            <div class="contact-info-item mb-2">
                                <div class="contact-info-item-icon">
                                    <i class="lni lni-map-marker"></i>
                                </div>
                                <div class="contact-info-item-text" style="transition: transform 0.3s ease;" onmouseover="this.style.transform='translateY(-15px)'" onmouseout="this.style.transform='translateY(0)'">
                                    <h6 class="fs-lg mb-1">Address</h6>
                                    <p class="p-text">Bluebells Technosolutions Pvt. Ltd. S-15, 2nd Floor, Adarshini Plaza, Near Satyam Restaurant, Sri Aurobindo Marg, Adhchini New Delhi- -110017</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-3">
                            <div class="contact-info-item mb-2">
                                <div class="contact-info-item-icon">
                                    <i class="lni lni-headphone"></i>
                                </div>
                                <div class="contact-info-item-text" style="transition: transform 0.3s ease;" onmouseover="this.style.transform='translateY(-15px)'" onmouseout="this.style.transform='translateY(0)'">
                                    <h6 class="fs-lg mb-1">Call Us</h6>
                                    <p class="p-text mb-0"> 9810401772</p>
                                    <p class="p-text"> 9891858137 <br> 9650920050</p>
                                
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-3">
                            <div class="contact-info-item mb-2">
                                <div class="contact-info-item-icon">
                                    <i class="lni lni-envelope"></i>
                                </div>
                                <div class="contact-info-item-text" style="transition: transform 0.3s ease;" onmouseover="this.style.transform='translateY(-15px)'" onmouseout="this.style.transform='translateY(0)'">
                                    <h6 class="fs-lg mb-1">Email Us</h6>
                                    <p class="p-text mb-0">Yadav@bvtpl.in</p>
                                    <p class="p-text">Jogender.singh@blue <br>bellstechno.com 
                                        <br>ravider@bluebellstechno.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-3">
                            <div class="contact-info-item mb-2">
                                <div class="contact-info-item-icon">
                                    <i class="lni lni-alarm-clock"></i>
                                </div>
                                <div class="contact-info-item-text " style="transition: transform 0.3s ease;" onmouseover="this.style.transform='translateY(-15px)'" onmouseout="this.style.transform='translateY(0)'">
                                    <h6 class="fs-lg mb-1">Address</h6>
                                    <p class="p-text mb-0">Mon – Fri: 9am – 7pm</p>
                                    <p class="p-text">Sat – Sun: closed</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                            {/* ======================== */}
                            <section className="pg-section sc-features bg-light">
                                <div className="container">
                                    <div className="sc-features-cnt mx-3 py-5">
                                        <div className="sc-list row">
                                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                                <div className="sc-list-itm text-center h-100">
                                                    <div className="itm-icon mx-auto">
                                                        <i className="lni lni-map-marker" />
                                                    </div>
                                                    <h5 className="itm-title op-09 py-2 fs-lg">Address</h5>
                                                    <p className="p-text pt-1 width-minimized">
                                                        Bluebells Technosolutions Pvt. Ltd. S-15, 2nd Floor,
                                                        Adarshini Plaza, Near Satyam Restaurant, Sri Aurobindo
                                                        Marg, Adhchini New Delhi- -110017
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
                                                    <h5 className="itm-title op-09 py-2 fs-lg">Call Us</h5>
                                                    <p className="p-text pt-1 width-minimized">
                                                        {" "}
                                                        Mob.No:- 9810401772 <br />
                                                        Mob.No:- 9891858137 <br />
                                                        Mob.No:- 9650920050
                                                        <a href="#" className="itm-link text-capitalize">
                                                            {/* <span class="fs-lg">read more</span> */}
                                                            <span className="ms-1 fs-md itm-link-icon">
                                                                {/* <i class="lni lni-chevron-right"></i> */}
                                                            </span>
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                                <div className="sc-list-itm text-center h-100">
                                                    <div className="itm-icon mx-auto">
                                                        <i className="lni lni-envelope" />
                                                    </div>
                                                    <h5 className="itm-title op-09 py-2 fs-lg">Email Us</h5>
                                                    <p className="p-text pt-1 width-minimized">
                                                        Yadav@bvtpl.in <br />
                                                        Jogender.singh@bluebellstechno.com <br />
                                                        ravider@bluebellstechno.com
                                                    </p>
                                                    {/* <p class="p-text pt-1 width-minimized"></p> */}
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
                            {/* ======================== */}
                            <div className="sc-block sc-block-contact py-5 row gx-lg-5">
                                <div className="contact-l col-lg-6">
                                    <div className="sc-block">
                                        <h3 className="fs-xx-lg">Feel Free To Contact With Us.</h3>
                                        <p className="p-text mt-3" />
                                    </div>
                                    <form
                                        className="mt-5"
                                        action="./contact/contact-process.php"
                                        id="requestform"
                                        noValidate="novalidate"
                                    >
                                        <div className="row">
                                            <div className="mb-3 col-sm-6">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue=""
                                                    tabIndex={1}
                                                    placeholder="Name"
                                                    name="name"
                                                    id="name"
                                                    required=""
                                                />
                                            </div>
                                            <div className="mb-3 col-sm-6">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue=""
                                                    tabIndex={2}
                                                    placeholder="Email"
                                                    name="email"
                                                    id="email"
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="mb-3 col-sm-6">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue=""
                                                    placeholder="Phone"
                                                    name="phone"
                                                    id="phone"
                                                    required=""
                                                />
                                            </div>
                                            <div className="mb-3 col-sm-6">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue=""
                                                    placeholder="Subject"
                                                    name="subject"
                                                    id="subject"
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <textarea
                                                className="form-control"
                                                tabIndex={3}
                                                placeholder="Comment"
                                                name="message"
                                                id="message"
                                                required=""
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                name="submit"
                                                className="btn btn-primary w-100 text-uppercase"
                                                id="submit"
                                                title="Submit now"
                                            >
                                                Send a message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="contact-r mt-5 mt-lg-0 col-lg-6">
                                    <div className="map h-100">
                                        <iframe
                                            src="https://www.google.com/maps/place/Blue+Bells+Techno+Solution+Pvt+Ltd/@28.536319,77.1975146,15z/data=!4m2!3m1!1s0x0:0x3121ee42450cc26a?sa=X&ved=1t:2428&ictx=111"
                                            height={450}
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="pg-footer py-5" id="footer">
                <div className="container">
                    <div className="pg-footer-content text-center text-md-start mx-3 row gx-md-5 pt-4">
                        <div className="col-md-6 col-lg-3 col-xl-4">
                            <div className="footer-block mb-4">
                                <a href="#" className="navbar-brand">
                                    <span className="fw-7 fs-xx-lg text-white">BlueBells Techno</span>
                                </a>
                                <p className="p-text text-white">
                                    Bluebells Techno solutions Established in 2014. It is one of the
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
                                        <div className="info-item-text text-white">+91 9650920050</div>
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
    )
}