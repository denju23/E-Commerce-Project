import React from 'react';
import { FaFacebookSquare, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub, FaHome, FaEnvelope, FaPhoneAlt } from "react-icons/fa";


function Footer() {
    return (
        <React.Fragment>

            <footer className="bg-secondary text-center text-dark">
                <div className="container p-4">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <FaFacebookSquare />
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FaTwitter />
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FaGoogle />
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FaInstagram />
                        </a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FaLinkedin /></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FaGithub /></a>
                    </section>
                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our contacts</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" className="form-control" />
                                        <label className="form-label" htmlFor="form5Example21">Email address</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                    <section className="mb-4">
                        <p>
                            "What you wear is how you present yourself to the world, especially today, when human contacts are so quick. Fashion is instant language." "Fashion should be a form of escapism, and not a form of imprisonment." "Fashion is like eating; You shouldn't stick to the same menu."
                        </p>
                    </section>
                    <section className="">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h3 className="text-uppercase">Contact</h3>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                            <FaHome /><li>1234k Avenue, 4th block, <span>New York City.</span></li></a>

                                    </li>
                                    <li>
                                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                            <FaEnvelope /><li>info@example.com</li>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                            <FaPhoneAlt icon="fa-duotone fa-phone" /><li>+1234 567 567</li>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h3 className="text-uppercase">Information</h3>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">contacts Us</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Special Products</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">FAQ's</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Short Codes</a>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h3 className="text-uppercase">Category</h3>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">Dresses</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Sweaters</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Shirts
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Sarees</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Shorts & Skirts</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </section>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2022 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer;