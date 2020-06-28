import React from 'react';
import './App.css';
import { Nav, Items, NewItem, User, NewUser } from './Components';

import { Route, Switch } from 'react-router-dom';


class App extends React.Component {
  state = {

  }

  render() {
    return (
      <div>
        <Nav />
        <Switch>

          <Route path='/signup' component={NewUser} />
          <Route path='/users/:id' component={User} />

          <Route path='/newItem' component={NewItem} />
          <Route path='/' component={Items} />
        </Switch>
      </div>
    )
  }
}



export default App;
