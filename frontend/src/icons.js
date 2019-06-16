const weatherIcons = [
  {
    code: 200,
    label: "thunderstorm with light rain",
    icon: "storm-showers"
  },

  {
    code: 201,
    label: "thunderstorm with rain",
    icon: "storm-showers"
  },

  {
    code: 202,
    label: "thunderstorm with heavy rain",
    icon: "storm-showers"
  },

  {
    code: 210,
    label: "light thunderstorm",
    icon: "storm-showers"
  },

  {
    code: 211,
    label: "thunderstorm",
    icon: "thunderstorm"
  },

  {
    code: 212,
    label: "heavy thunderstorm",
    icon: "thunderstorm"
  },

  {
    code: 221,
    label: "ragged thunderstorm",
    icon: "thunderstorm"
  },

  {
    code: 230,
    label: "thunderstorm with light drizzle",
    icon: "storm-showers"
  },

  {
    code: 231,
    label: "thunderstorm with drizzle",
    icon: "storm-showers"
  },

  {
    code: 232,
    label: "thunderstorm with heavy drizzle",
    icon: "storm-showers"
  },

  {
    code: 300,
    label: "light intensity drizzle",
    icon: "sprinkle"
  },

  {
    code: 301,
    label: "drizzle",
    icon: "sprinkle"
  },

  {
    code: 302,
    label: "heavy intensity drizzle",
    icon: "sprinkle"
  },

  {
    code: 310,
    label: "light intensity drizzle rain",
    icon: "sprinkle"
  },

  {
    code: 311,
    label: "drizzle rain",
    icon: "sprinkle"
  },

  {
    code: 312,
    label: "heavy intensity drizzle rain",
    icon: "sprinkle"
  },

  {
    code: 313,
    label: "shower rain and drizzle",
    icon: "sprinkle"
  },

  {
    code: 314,
    label: "heavy shower rain and drizzle",
    icon: "sprinkle"
  },

  {
    code: 321,
    label: "shower drizzle",
    icon: "sprinkle"
  },

  {
    code: 500,
    label: "light rain",
    icon: "rain"
  },

  {
    code: 501,
    label: "moderate rain",
    icon: "rain"
  },

  {
    code: 502,
    label: "heavy intensity rain",
    icon: "rain"
  },

  {
    code: 503,
    label: "very heavy rain",
    icon: "rain"
  },

  {
    code: 504,
    label: "extreme rain",
    icon: "rain"
  },

  {
    code: 511,
    label: "freezing rain",
    icon: "rain-mix"
  },

  {
    code: 520,
    label: "light intensity shower rain",
    icon: "showers"
  },

  {
    code: 521,
    label: "shower rain",
    icon: "showers"
  },

  {
    code: 522,
    label: "heavy intensity shower rain",
    icon: "showers"
  },

  {
    code: 531,
    label: "ragged shower rain",
    icon: "showers"
  },

  {
    code: 600,
    label: "light snow",
    icon: "snow"
  },

  {
    code: 601,
    label: "snow",
    icon: "snow"
  },

  {
    code: 602,
    label: "heavy snow",
    icon: "snow"
  },

  {
    code: 611,
    label: "sleet",
    icon: "sleet"
  },

  {
    code: 612,
    label: "shower sleet",
    icon: "sleet"
  },

  {
    code: 615,
    label: "light rain and snow",
    icon: "rain-mix"
  },

  {
    code: 616,
    label: "rain and snow",
    icon: "rain-mix"
  },

  {
    code: 620,
    label: "light shower snow",
    icon: "rain-mix"
  },

  {
    code: 621,
    label: "shower snow",
    icon: "rain-mix"
  },

  {
    code: 622,
    label: "heavy shower snow",
    icon: "rain-mix"
  },

  {
    code: 701,
    label: "mist",
    icon: "sprinkle"
  },

  {
    code: 711,
    label: "smoke",
    icon: "smoke"
  },

  {
    code: 721,
    label: "haze",
    icon: "day-haze"
  },

  {
    code: 731,
    label: "sand, dust whirls",
    icon: "cloudy-gusts"
  },

  {
    code: 741,
    label: "fog",
    icon: "fog"
  },

  {
    code: 751,
    label: "sand",
    icon: "cloudy-gusts"
  },

  {
    code: 761,
    label: "dust",
    icon: "dust"
  },

  {
    code: 762,
    label: "volcanic ash",
    icon: "smog"
  },

  {
    code: 771,
    label: "squalls",
    icon: "day-windy"
  },

  {
    code: 781,
    label: "tornado",
    icon: "tornado"
  },

  {
    code: 800,
    label: "clear sky",
    icon: "sunny"
  },

  {
    code: 801,
    label: "few clouds",
    icon: "cloudy"
  },

  {
    code: 802,
    label: "scattered clouds",
    icon: "cloudy"
  },

  {
    code: 803,
    label: "broken clouds",
    icon: "cloudy"
  },

  {
    code: 804,
    label: "overcast clouds",
    icon: "cloudy"
  },

  {
    code: 900,
    label: "tornado",
    icon: "tornado"
  },

  {
    code: 901,
    label: "tropical storm",
    icon: "hurricane"
  },

  {
    code: 902,
    label: "hurricane",
    icon: "hurricane"
  },

  {
    code: 903,
    label: "cold",
    icon: "snowflake-cold"
  },

  {
    code: 904,
    label: "hot",
    icon: "hot"
  },

  {
    code: 905,
    label: "windy",
    icon: "windy"
  },

  {
    code: 906,
    label: "hail",
    icon: "hail"
  },

  {
    code: 951,
    label: "calm",
    icon: "sunny"
  },

  {
    code: 952,
    label: "light breeze",
    icon: "cloudy-gusts"
  },

  {
    code: 953,
    label: "gentle breeze",
    icon: "cloudy-gusts"
  },

  {
    code: 954,
    label: "moderate breeze",
    icon: "cloudy-gusts"
  },

  {
    code: 955,
    label: "fresh breeze",
    icon: "cloudy-gusts"
  },

  {
    code: 956,
    label: "strong breeze",
    icon: "cloudy-gusts"
  },

  {
    code: 957,
    label: "high wind, near gale",
    icon: "cloudy-gusts"
  },

  {
    code: 958,
    label: "gale",
    icon: "cloudy-gusts"
  },

  {
    code: 959,
    label: "severe gale",
    icon: "cloudy-gusts"
  },

  {
    code: 960,
    label: "storm",
    icon: "thunderstorm"
  },

  {
    code: 961,
    label: "violent storm",
    icon: "thunderstorm"
  },

  {
    code: 962,
    label: "hurricane",
    icon: "cloudy-gusts"
  }
];

module.exports = {
  weatherIcons
};
