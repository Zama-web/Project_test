import React from 'react';
import './App.css';
import NavigationMenu from './Components/NavigationMenu/NavigationMenu';
import BlockSliders from './Components/Desktop-1/BlockSliders';
import MainContainer from './Components/Desktop-1/MainСontainer';
import InfoBlock from './Components/Desktop-1/InfoBlock';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <NavigationMenu/>

      </header>
        <InfoBlock/>
        <BlockSliders/>
        <MainContainer/>


    </div>
  );
}

export default App;
