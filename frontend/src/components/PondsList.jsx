import React from "react";
import axios from "axios";

class PondsList extends React.Component {
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
      <React.Fragment>
        <h3>Plans d'eau</h3>
        <ul>
            {this.state.ponds.map((pond, idx) => {
                return (
                    <li key={idx}>{pond.name}<br/>{pond.city}
                    {/* onClick={} */}
                    </li>
                );
            })

            }
          
        </ul>
      </React.Fragment>
    );
  }
}

export default PondsList;
