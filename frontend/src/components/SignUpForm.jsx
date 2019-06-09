import React from 'react';

// Package
import { Facebook } from 'react-feather';

class SignUpForm extends React.Component {
    render() {
        return (
            <div className="form-modale">
                <div className="form-container">
                    <h1 className="form-title">Devenez Skipper maintenant</h1>
                    <button className="fb-login-btn"><Facebook className="filled" />M'INSCRIRE AVEC FACEBOOK</button>
                    <div className="choice">OU AVEC VOTRE EMAIL</div>
                    <form>
                        <div className="input-container">
                            <label htmlFor="name">Adresse E-mail </label>
                            <input type="email" name="email" id="email" placeholder="Saisissez votre adresse e-mail" required />
                        </div>
                        <div className="input-container">
                            <label htmlFor="name">Mot de passe </label>
                            <input type="password" name="password" id="password" placeholder="Tapez votre mot de passe" required />
                        </div>
                        <button type="submit" className="signup-btn">M'INSCRIRE</button>
                        <div className="cgu">
                            En vous inscrivant, vous acceptez les <a href="#">Conditions générales d'utilisation</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
};
export default SignUpForm;