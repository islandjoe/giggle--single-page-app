import React from 'react'

const SearchResults = (props)=> {
  if (props.jokes.length === 0) {
    return 'No results found!'
  }
  else {
    return (
      <ul className='jokes-list'>
        {props.jokes.map(item => <li key={item.id}>{item.joke}</li>)}
      </ul>
    )
  }
}

export default SearchResults
