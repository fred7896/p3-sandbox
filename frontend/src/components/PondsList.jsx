import React from "react";

class PondsList extends React.Component {

degreesToRadians = (degrees) => {
        return degrees * Math.PI / 180;
      }
   
  calculateDistanceFromCenter = (coordCenter, coordPond) => {
      const earthRadiusKm = 6371;

    let dLat = this.degreesToRadians(coordPond[0]-coordCenter[0]);
    let dLon = this.degreesToRadians(coordPond[1]-coordCenter[1]);

    let lat1 = this.degreesToRadians(coordCenter[0]);
    let lat2 = this.degreesToRadians(coordPond[0]);

         let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                 Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    
         let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
         return Math.round(earthRadiusKm * c);

  }  
  render() {
    return (
      <React.Fragment>
        <h3>Plans d'eau</h3>
        <ul>
          {this.props.ponds.map((pond, idx) => {
              let positionPond = [pond.latitude, pond.longitude];
              let distance = this.calculateDistanceFromCenter(this.props.center, positionPond);
              console.log(distance);
            return (
              <li key={idx}>
                {pond.name}
                <br />
                {pond.city}
                 <br />
                {`${distance} km`} 
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default PondsList;
