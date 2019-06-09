import React from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import PondsList from "../components/PondsList";
import MyMap from "../components/MyMap";
import Footer from "../components/Footer";

// CSS
import "../assets/css/Navigate.css";

export default class Navigate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ponds: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5050/api/water-ponds").then(res => {
      this.setState({
        ponds: res.data
      });
    });
  }

  render() {
    console.log(this.state.ponds);
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
              <PondsList ponds={this.state.ponds} />
            </div>
            <MyMap ponds={this.state.ponds} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
