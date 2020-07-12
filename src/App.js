import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Main from './Components/Main';
import Page404 from './Components/Page404';
import UserList from './Components/Desktop-3/UserList';
import Delivery from './Components/Desktop-4/Delivery';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/' component={Home}   />
        <Route   path='/home' component={Home}   />
        <Route   path='/main' component={Main}   />
        <Route   path='/consultants' component={UserList} />
        <Route   path='/delivery' component={Delivery} />
        <Route    path='/' component={Page404}   />
        {/* /main /main/2 /main/main/2 */}
      </Switch>



    </div>
  );
}

export default App;
