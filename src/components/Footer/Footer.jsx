import React from 'react';
import Style from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={Style.footer}>
            <div>
                <h3>All rights reserved By Carlos Aracena 2020 </h3>
                <a href="https://github.com/thefather20014" style={{ textDecoration: 'none', color: '#fff' }} target="_blank">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.facebook.com/carlos.aracenasosa/" style={{ textDecoration: 'none', color: '#fff' }} target="_blank">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/aracenasosa/" style={{ textDecoration: 'none', color: '#fff' }} target="_blank">
                    <i className="fab fa-instagram-square"></i>
                </a>

            </div>
        </footer>
    )
}

export default Footer
