const express = require('express');
const bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github.js').getReposByUsername;
const dbMethods = require('../database/index.js')
let app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  promise = new Promise((resolve, reject)=> {
    getReposByUsername(req.body.username, (err, repos)=> {
      if(err) reject(err)
      else resolve(repos)
    })
  })

  promise.then((repos)=> {
    let newRepos = repos.data.map(repo => {
      repo.owner = repo.owner.login;
      return repo
    })
    dbMethods.save(newRepos)
    .then(result => res.status(201).send('data are saved'))
    .catch(err => console.log(err))
  }).catch((err)=>{
    console.log(err)
  })

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  dbMethods.retrieve().then((result)=> {
    res.status(200).json(result)
  })
});

let port = process.env.PORT || 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

