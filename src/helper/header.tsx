import React from "react"

function Header() {
    return (
    <div style={{margin:"10px"}}>
    <header className="pg-header d-flex flex-column" id="header">
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
                        Bluebells Techno Established in 2014. It is one of the fastest growing
                        manpower and service provider Globally, With a focus on delivering
                        high-quality technical and non-technical manpower to various private
                        and government sectors, we have earned a reputation for excellence and
                        reliability in the industry.
                    </p>
                </div>
            </div>
        </div>
        <div className="pg-header-content text-center">
            <div className="header-slider">
                <div className="header-slider-itm px-2">
                    <h1 className="text-white display-5 fw-5 ls-1 header-slider-itm-title" />
                    <p className="text-white lead mt-4 mb-5 op-09 px-lg-5">
                        Bluebells Technosolutions Pvt. Ltd. Established in 2014. It is one of
                        the fastest growing manpower and service provider in India
                    </p>
                    {/* <a href="#" class="btn btn-primary text-uppercase">explore more</a> */}
                </div>
                <div className="header-slider-itm px-2">
                    <h1 className="text-white display-5 fw-5 ls-1 header-slider-itm-title" />
                    <p className="text-white lead mt-4 mb-5 op-09 px-lg-5">
                        We had started our business modestly by installation and commissioning
                        of various services like all electrical works , civil works, air
                        conditioning , DG maintenance, plumbing, pest control etc to various
                        companies, hospitals, Industries and public sector.
                    </p>
                    {/* <a href="#" class="btn btn-primary text-uppercase">explore more</a> */}
                </div>
                <div className="header-slider-itm px-2">
                    <h1 className="text-white display-5 fw-5 ls-1 header-slider-itm-title" />
                    <p className="text-white lead mt-4 mb-5 op-09 px-lg-5">
                        We are providing technical and non technical manpower to various
                        private and Govt. sector. As an approved partner of HPE and providing
                        end to end solutions in IT and software.
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header