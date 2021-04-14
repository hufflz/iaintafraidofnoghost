import React, { useEffect } from 'react'
import './App.css';
import MainContainer from './components/mainContainer'

function App() {
  useEffect(() => {
    document.title = "IAAONG - Phasmophobia helper!"
  }, [])
  return (
    <div className="App">
      <MainContainer/>
    </div>
  );
}

export default App;
