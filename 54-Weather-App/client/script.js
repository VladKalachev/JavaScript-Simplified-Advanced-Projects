import axios from "axios";

navigator.geolocation.getCurrentPosition(positionSuccess, positionError)

function positionSuccess({ coords }) {
  getWeather(coords.latitude, coords.longitude)
}

function positionError() {
  alert('There was an error getting your location. Please allow us to use your location and refresh the page.')
}

function getWeather(lat, lon) {
  axios
    .get("http://localhost:3001/weather", {
      params: { lat, lon },
    })
    .then(res => {
      renderWeather(res.data)
    })
    .catch(e => {
      console.log(e)
      alert("Error getting weather. Please try again.")
    })
}