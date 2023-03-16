const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000/constellations";
const url = "http://localhost:5000/constellations"

function getAllNames() {
  axios
    .get(BASE_URL)
    .then((response) => {
      const result = response.data.map((constellation) => constellation.name)
      console.log(result)
    })
}

function getConstellationsByQuadrant(quadrant) {
  axios
    .get(BASE_URL)
    .then((response) => {
      const result = response.data.filter((constellation) => constellation.quadrant === quadrant)
      console.log(result)
    })
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};