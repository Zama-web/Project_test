import React from 'react';
import './App.css';
// import NavigationMenu from './Components/NavigationMenu/NavigationMenu';
// import BlockSliders from './Components/Desktop-1/BlockSliders';
// import MainContainer from './Components/Desktop-1/MainСontainer';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Main from './Components/Main';
import Page404 from './Components/Page404';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/' component={Home}   />
        <Route   path='/home' component={Home}   />
        <Route   path='/main' component={Main}   />
        <Route    path='/' component={Page404}   />
        {/* /main /main/2 /main/main/2 */}
      </Switch>


    </div>
  );
}

export default App;
