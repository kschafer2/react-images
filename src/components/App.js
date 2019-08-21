import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
         'Client-ID eed5dbcc90e4b13e9ad086521c4c39d8a166595906ce6a3ab7bfc7782fa8d1dd'
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
