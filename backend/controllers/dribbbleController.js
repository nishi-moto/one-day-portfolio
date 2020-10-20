const fetch = require('node-fetch');
require('dotenv').config();

const dribbbleApi = process.env.DRIBBBLE_API_TOKEN;
const apiUrl = `https://api.dribbble.com/v2/user/shots?access_token=${dribbbleApi}&page=1&per_page=100`;


// MERGE ARRAYS IN A UNIQUE VALUE ARRAY
function mergeArrays(...arrays) {
  let jointArray = []
  arrays.forEach(array => {
    jointArray = [...jointArray, ...array]
  })
  return jointArray.filter((item, index) => jointArray.indexOf(item) === index)
}

async function getGallery(req, callback) {

  await fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      if (typeof req.query.tag !== null && typeof req.query.tag !== 'undefined') {
        return data.filter(shot => {
          return shot.tags.filter(tag => String(req.query.tag) === String(tag)).length > 0
        });
      }
      return data;
    })
    .then(data => callback(data));
}

async function getTags(callback) {

  await fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      const tags = data.reduce((accumulator, shot) => {
        return mergeArrays(accumulator, shot.tags);
      }, []).sort();
      callback(tags);
    });
}

async function getImageById(req, callback) {
  await fetch(apiUrl)
    .then(res => res.json())
    .then(data => data.filter(shot => Number(shot.id) === Number(req.params.id))[0])
    .then(data => callback(data));
}

module.exports = {
  getGallery,
  getTags,
  getImageById
};
