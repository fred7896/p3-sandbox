import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <header>
                <div className="nav-bar">
                    <img className="logo" src={require("../assets/images/logo.svg")} alt="logo"/>
                    <div className="login-btn-container">
                        <button className="login-btn">CONNEXION</button>
                    </div>
                </div>
            </header>
        );
    };
};
export default Navbar;