import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Hey there how are you!!!</h1>
     
      <Row title="Netflix originals" fetchUrl={requests.fetchNetflixOriginals}/>

      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>

    </div>
  );
}

export default App;
