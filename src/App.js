import React from 'react'
import './App.css'

import SearchBar from './componentes/SearchBar'
import VideoList from './componentes/VideoList'
import VideoPlayer from './componentes/VideoPlayer'

function App() {
  return (
    <div className="container">
      <SearchBar />
      <VideoList />
      <VideoPlayer />
    </div>
  );
}

export default App;
