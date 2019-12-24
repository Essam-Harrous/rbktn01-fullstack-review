const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', { useNewUrlParser: true, useUnifiedTopology: true });

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  owner: String,
  description: String,
  forks: Number,
  watchers: Number,
  html_url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  console.log(repos[0].owner)
  return Repo.exists({owner: repos[0].owner})
  .then(result =>{
    if(result){
      Repo.deleteMany({owner: repos[0].owner})
      .then(()=> {
        return Repo.create(repos)
      })
     }
     else return Repo.create(repos)
  })
}

let retrieve = ()=> {
  return Repo.find({}).sort({_id: -1}).limit(25)
}

module.exports.save = save;
module.exports.retrieve = retrieve;