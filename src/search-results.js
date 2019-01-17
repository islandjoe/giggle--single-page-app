import React from 'react'

const SearchResults = (props)=> {
  if (Object.keys(props.jokes).length > 0) {
    return (
      <ul className='jokes-list'>
        {props.jokes.map(item => <li key={item.id}>{item.joke}</li>)}
      </ul>
    )
  }
  else {
    return <div>No results found!</div>
  }

}

export default SearchResults
