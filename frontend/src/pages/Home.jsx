import React, { Component, Fragment } from 'react';

// CSS
import '../assets/css/App.css';

// Components
import Navbar from '../components/Navbar'
import SignUpForm from '../components/SignUpForm';
import Footer from '../components/Footer';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="container" >
                    <Navbar />
                    <SignUpForm />
                </div>
                <Footer />
            </Fragment>
        );
    };
};
export default Home;