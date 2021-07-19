import React from 'react';
import GlobalNavigationBar from './components/GlobalNavigationBar/GlobalNavigationBar';
import GlobalStyle from './styles/styles';
import './App.css';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <GlobalNavigationBar />
    </div>
  );
}

export default App;
