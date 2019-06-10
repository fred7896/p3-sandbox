import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import PondsList from "../components/PondsList";
import MyMap from "../components/MyMap";
import Footer from "../components/Footer";


// CSS
import "../assets/css/Navigate.css";

class Navigate extends React.Component {
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
    const {center} = this.props;
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
              <PondsList ponds={this.state.ponds} center={center} />
            </div>
            <MyMap ponds={this.state.ponds} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  center: state
});

const NavigateContainer = connect(mapStateToProps)(Navigate);

export default NavigateContainer;
