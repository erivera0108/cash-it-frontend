import React from 'react';
import './App.css';
import { Nav, Items, NewItem, User, NewUser } from './Components';

import { Route, Switch } from 'react-router-dom';


const USER_URL = 'http://localhost:3000/api/v1/users'

class App extends React.Component {
  state = {
    user: {}
  }

  componentDidMount() {
    const id = 1
    fetch(`${USER_URL}/${id}`)
      .then(res => res.json())
      .then(userData => {
        this.setState({
          user: userData
        })
      })
  }


  render() {
    return (
      <div>
        <Nav />
        <Switch>

          <Route path='/signup' component={NewUser} />
          <Route path='/users/:id' render={(routerProps) => <User {...routerProps} user={this.state.user}/>} />

          <Route path='/newItem' component={NewItem} />
          <Route path='/' component={Items} />
        </Switch>
      </div>
    )
  }
}



export default App;
