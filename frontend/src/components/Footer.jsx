import React from 'react';

// Package
import { Facebook, Instagram, Twitter, Send } from 'react-feather';

// CSS
import '../assets/css/Footer.css';

// Images
import omr from '../assets/images/one-meter-regatta-logo.svg';
import dws from '../assets/images/logo-dws-2018-noir.svg';


class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="logo-footer"><img className="img-omr" src={omr} target="_blank" alt="One-meter-regatta" />
                </div>
                <div className="links-footer">
                    <ul>
                        <li><a href="link" target="_blank" >Accueil</a></li>
                        <li><a href="link" target="_blank" >A propos</a></li>
                        <li><a href="link" target="_blank" >Classes</a></li>
                    </ul>
                    <ul>
                        <li><a href="link" target="_blank" >Instructions</a></li>
                        <li><a href="link" target="_blank" >Certification</a></li>
                        <li><a href="link" target="_blank" >Arbitrage</a></li>
                    </ul>
                    <ul>
                        <li><a href="link" target="_blank" >Presse</a></li>
                        <li><a href="link" target="_blank" >Contact</a></li>
                        <li><a href="link" target="_blank" >CGU</a></li>
                    </ul>
                </div>
                <div className="newsletter">
                    <form className="register-news">
                        <input className="input-newsletter" type="email" name="email" placeholder="Email" />
                        <Send className="img-send filled-icon" />
                    </form>
                    <p>Inscrivez-vous à notre newsletter pour être au courant des dernières nouveautés</p>
                </div>
                <div className="social-footer">
                    <Instagram className="img-social" />
                    <Twitter className="img-social filled-icon" />
                    <Facebook className="img-social filled-icon" />
                </div>
                <div className="logo-dws">
                    <a href="link" target="_blank" ><img className="img-dws" src={dws} alt="Dyna-wing-sail" /></a>
                </div>
            </div>
        )
    }
}

export default Footer;