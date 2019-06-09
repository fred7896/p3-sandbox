import React from "react";

class PondsList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Plans d'eau</h3>
        <ul>
          {this.props.ponds.map((pond, idx) => {
            return (
              <li key={idx}>
                {pond.name}
                <br />
                {pond.city}
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default PondsList;
