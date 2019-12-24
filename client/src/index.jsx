import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    axios.post('/repos', {
      username: term
    }).then((response)=> {
      this.getRepos()
    }).catch(err => {
      conosle.log(err)
    })
  }

  getRepos() {
    console.log('hi')
    axios.get('/repos')
    .then((res)=> {
      this.setState({
        repos: res.data
      })
      console.log(this.state.repos)
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.getRepos();
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));