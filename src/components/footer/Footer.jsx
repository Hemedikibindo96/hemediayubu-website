import React from "react";
import "./footer.css";

export const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Kibindo</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">Home</a>
                    </li>

                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a 
                        href="https://www.instagram.com/kibindohemedy"
                        className="footer__social-link" 
                        target="_blank"
                    >
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a
                        href="https://wa.link/3wklcb"
                        className="footer__social-link"
                        target="_blank"
                    >
                        <i className="bx bxl-whatsapp"></i>
                    </a>
                    <a
                        href="https://twitter.com/hemediayubu7"
                        className="footer__social-link"
                        target="_blank"
                    >
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>

                <span className="footer__copy">
                     hemediayubu7@gmail.com &#169; All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer