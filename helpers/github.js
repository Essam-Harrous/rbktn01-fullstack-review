const request = require('request');
// const config = require('../config.js');
const axios = require('axios');


let getReposByUsername = (user, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  axios({
    method: 'get',
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'request'
      // 'Authorization': `token ${config.TOKEN}`
      }
  }).then((repos)=> {
    callback(null, repos)
  }).catch((err)=> {
    callback(err, null)
  })

  // let options = {
  //   url: `https://api.github.com/users/${user}/repos`,
  //   headers: {
  //     'User-Agent': 'request',
  //     'Authorization': `token ${config.TOKEN}`
  //   }
  // };

}

module.exports.getReposByUsername = getReposByUsername;