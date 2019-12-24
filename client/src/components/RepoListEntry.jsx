import React from 'react';
let card = {
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
  width: '40%',
  margin: '20px 10px',
  textAlign: 'center'
}

let container = {
  padding: "2px 10px"
}

const RepoListEntry = ({repo}) => (
  <div style={card}>
    <h1><a href={repo.html_url}>{repo.name}</a></h1>
    <div style={container}>
      <p>{repo.description}</p>
      <div>
        <p>owner: {repo.owner} </p>
        <div style={{display: 'flex',
                      justifyContent: "space-between"}}>
          <p>watchers: {repo.watchers} </p>
          <p>forks: {repo.forks} </p>
        </div>
      </div>
    </div>
  </div>
)


export default RepoListEntry;