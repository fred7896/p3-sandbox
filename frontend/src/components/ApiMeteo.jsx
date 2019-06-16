import React from "react";
import axios from "axios";

import "./ApiMeteo.css";
import "../assets/css/weather-icons.min.css";
import "../assets/css/weather-icons-wind.min.css";

let weatherIcons = require("../icons.json");

const APIKEY = "fc0124f80a3f6fcf2851870a5d963361";

class ApiMeteo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meteo: [],
      icon: "wi wi-day-sunny",
      forecast: [],
      completeForecast: [],
      waterPond: []
    };
  }

  // getMinTemp = data => {
  //   return data.reduce((min, b) => Math.min(min, b.temp), data[0].temp);
  // };
  // getMaxTemp = data => {
  //   return data.reduce((max, b) => Math.max(max, b.temp), data[0].temp);
  // };

  findMinMax = arr => {
    let min = arr[0].temp,
      max = arr[0].temp;

    for (let i = 1, len = arr.length; i < len; i++) {
      let v = arr[i].temp;
      min = v < min ? v : min;
      max = v > max ? v : max;
    }

    return [Math.round(min), Math.round(max)];
  };

  componentDidMount() {
    this.getData();
    
  }

  getData = () => {
    axios.get("http://localhost:5050/api/water-ponds").then(res => {
      this.setState({
        waterPond: res.data
      });
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?lat=${
            this.state.waterPond[1].latitude
          }&lon=${
            this.state.waterPond[1].longitude
          }&lang=fr&APPID=${APIKEY}&units=metric`
        )
        .then(res2 => {
          this.setState({
            forecast: res2.data.list
          });
          this.displayList(this.state.forecast);
        });
    });
  };

  displayList = arr => {
    if (arr) {
      const hourForecast = arr.map(time => {
        const options = { weekday: "long" };
        const date = new Date(time.dt_txt);
        const dayFr = new Intl.DateTimeFormat("fr-FR", options).format(date);
        const shortDay = `${dayFr.slice(0, 3)}.`;
        const dayNumber = date.getDay();
        return {
          dt_txt: time.dt_txt,
          dt_day: shortDay,
          dayNumber: dayNumber,
          temp: time.main.temp,
          desc: time.weather[0].description,
          code: time.weather[0].id,
          wind_deg: time.wind.deg,
          wind_speed: time.wind.speed
        };
      });
      const extremeTemp = [];
      for (let j = 0; j < 7; j++) {
        let data = hourForecast.filter(report => {
          return report.dayNumber === j;
        });
        if (data[0] !== undefined) {
          let tempScale = this.findMinMax(data);

          extremeTemp.push({
            dayNumber: j,
            tempScale: tempScale
          });
        }
      }
      const dayForecast = hourForecast.filter(el => {
        const hours = el.dt_txt.slice(11, 19);
        return hours === "12:00:00";
      });
      console.log(dayForecast);
      for (let i = 0; i < dayForecast.length; i++) {
        for (let j = 0; j < extremeTemp.length; j++) {
          if (extremeTemp[j].tempScale !== undefined) {
            // console.log(dayForecast[i].dayNumber);
            // console.log(extremeTemp[j].dayNumber);
            if (dayForecast[i].dayNumber === extremeTemp[j].dayNumber) {
              this.setState(prevState => ({
                completeForecast: [
                  ...prevState.completeForecast,
                  {
                    ...dayForecast[i],
                    tempMin: extremeTemp[j].tempScale[0],
                    tempMax: extremeTemp[j].tempScale[1]
                  }
                ]
              }));
            }
          }
        }
      }
      return this.state.completeForecast;
    }
    return "loading";
  };

  render() {
    
    return (
      <div className="meteo-container-global">
        <h3 className="meteo-title">Meteo des prochains jours</h3>

        <ul id="horizontal-list">
          {this.state.completeForecast.map((el, idx) => {
            const prefix = "wi wi-";
            let icon = weatherIcons[el.code].icon;
            if (
              !(el.code > 699 && el.code < 800) &&
              !(el.code > 899 && el.code < 1000)
            ) {
              icon = "day-" + icon;
            }
            icon = prefix + icon;
            return (
              <li key={idx}>
                <div className="day-container">
                  <p className="day-p">{el.dt_day}</p>
                  <div className="custom-icon"><i className={icon} /></div>
                  <p className="desc-p">{el.desc.charAt(0).toUpperCase() + el.desc.slice(1)}</p>
                  <p className="temp-p"><span className="temp-p-min">{Math.round(el.tempMin)}°C</span> /{Math.round(el.tempMax)}°C</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ApiMeteo;
