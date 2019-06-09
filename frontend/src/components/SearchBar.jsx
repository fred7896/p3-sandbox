import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setCenterAction } from '../redux/actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      submitSearch: "",
      cities: []
    };
  }

  updateList = city => {
    if (city.length > 0) {
      axios
        .get(
          `https://nominatim.openstreetmap.org/search?city=${city}&format=geojson&countrycodes=fr,be`
        )
        .then(res => {
          this.setState({
            cities: res.data.features
          });
        });
    }
  };

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  handleSubmit = e => {
    if (e) e.preventDefault();
    const searchValue = this.input.value;
    this.setState({ submitSearch: searchValue.substr(0, 20) }, () => {
      this.updateList(this.state.submitSearch);
    });
  };

  setCenter = coord => {
    const { dispatch } = this.props;
    dispatch(setCenterAction(coord.reverse()));
  };

  resetSearch = () => {
    this.setState({ search: "" });
  };

  render() {
    //const { center, dispatch } = this.props;
    return (
      <div id="search" className="search-container">
        <h2>Trouver où naviguer</h2>
        <form className="search" onSubmit={this.handleSubmit}>
          <input
            id="search-text-input"
            type="text"
            placeholder="Saisissez une ville"
            ref={element => {
              this.input = element;
            }}
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
          {this.state.cities.length > 0 && this.state.search !== "" ? (
            <ul className="res">
              {this.state.cities.map((city, idx) => {
                return (
                  <li
                    key={idx}
                    onClick={() => {
                      this.setCenter(city.geometry.coordinates);
                      this.resetSearch();
                    }}
                  >
                    {city.properties.display_name}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p />
          )}
        </form>
        {/* <span class="fa fa-search" /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  center: state
});

const SearchBarContainer = connect(mapStateToProps)(SearchBar);

export default SearchBarContainer;
