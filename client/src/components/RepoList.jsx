import React from 'react';
import RepoListEntry from './RepoListEntry.jsx'


class RepoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    var check;
    if(this.props.repos.length != 0){
      check = this.props.repos.map(repo => <RepoListEntry repo={repo}/>)
    }
    let container = {
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap: 'wrap'
    }
    return (
      <div>
        <h4> Repo List Component </h4>
        <p>There are {this.props.repos.length} repos.</p>
        <div style={container}>
          {check}
        </div>
      </div>
    )
  }

}


export default RepoList;