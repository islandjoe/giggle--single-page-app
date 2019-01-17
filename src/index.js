import React from 'react'
import ReactDOM from 'react-dom'
import SearchForm from './SearchForm'
import SearchResults from './search-results'
import './styles.css'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      searchTerm: '',
      jokes: [],
      isFetchingJokes: false,
    }

    this.onSearchChange = this.onSearchChange.bind(this)
    this.searchJokes    = this.searchJokes.bind(this)
  }

  searchJokes(limit = 12) {
    this.setState({ isFetchingJokes: true })

    let jokesAPI = `https://icanhazdadjoke.com/search?term=${this.state.searchTerm}&limit=${limit}`
    let jokes = (json)=> {
      const jokes = json.results
      this.setState({
        jokes,
        isFetchingJokes: false
      })
    }
    const accept = { method: "GET", headers: { Accept: "application/json" } }

    fetch(jokesAPI, accept)
      .then(response => response.json())
        .then(jokes)
  }

  onSearchChange(value) {
    this.setState({ searchTerm: value  })
  }

  renderJokes() {
    return <SearchResults jokes={this.state.jokes} />
  }

  render() {
    return (
      <div className='App'>
        <img className='logo' src='./giggle-logo.png' alt='' />
        <SearchForm
          onFormSubmit={this.searchJokes}
          onSearchValueChange={this.onSearchChange}
          isSearching={this.state.isFetchingJokes}
          onSingleSearchClick={()=> this.searchJokes(1)} />

        {this.state.isFetchingJokes ? "Searching..." : this.renderJokes()}

      </div>
    )
  }
}

const rootElt = document.getElementById('root')
ReactDOM.render(<App version="1.0" />, rootElt)
