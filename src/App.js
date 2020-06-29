import React from 'react';
import './App.css';
import { Nav, Items, NewItem, ItemShowPage, User, NewUser } from './Components';

import { Route, Switch } from 'react-router-dom';



const USER_URL = 'http://localhost:3000/api/v1/users'
const ITEMS_URL = 'http://localhost:3000/api/v1/items'
const BIDS_URL = 'http://localhost:3000/api/v1/bids'

class App extends React.Component {
  state = {
    user: {},
    items: [],
    bids: []
  }

  componentDidMount() {
    const id = 15
    fetch(`${USER_URL}/${id}`)
      .then(res => res.json())
      .then(userData => {
        this.setState({
          user: userData
        })
      })

    fetch(ITEMS_URL)
      .then(res => res.json())
      .then(items => {
        this.setState({
          items
        })
      })

    fetch(BIDS_URL)
      .then(res => res.json())
      .then(bids => {
        this.setState({
          bids
        })
      })
  }


  render() {
    
    return (
      <div>
        <Nav userId={this.state.user.id} />
        <Switch>

          <Route path='/signup' component={NewUser} />
          <Route path='/users/:id' render={(routerProps) => <User {...routerProps} user={this.state.user} />} />

          <Route path='/newItem' component={NewItem} />
          <Route path='/items/:id' render={routerProps => <ItemShowPage {...routerProps} bids={this.state.bids} />} />

          <Route path='/' render={routerProps => <Items items={this.state.items} {...routerProps} />} />
        </Switch>
      </div>
    )
  }
}



export default App;
