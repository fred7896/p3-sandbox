import React from "react";
import SearchBar from "../components/SearchBar";
import PondsList from "../components/PondsList";
import MyMap from "../components/MyMap";
import Footer from "../components/Footer";

// CSS
import "../assets/css/Navigate.css";

export default class Navigate extends React.Component {

  render() {
    return (
      <div className="Navigate-container-global">
        <div className="Navigate-Navbar">NAVBAR</div>
        <div className="Navigate-container-main">
          <div className="container-inputs">
           <SearchBar />
            <div className="filters-container" />
          </div>
          <div className="ponds-container">
            <div className="ponds-list-container">
            <PondsList />
            </div>
            <MyMap />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
