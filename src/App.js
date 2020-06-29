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

  currentUser = user => {
    this.setState({
      user
    })
  }

  componentDidMount() {
    // Comment out the user fetch below to enable signup 
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
    const filteredItems = this.state.items.filter( item => item.user_id !== this.state.user.id)
    const userItems = this.state.items.filter( item => item.user_id === this.state.user.id)

    console.log('current user:', this.state.user, 'filtered items', filteredItems)
    
    return (
      <div>
        <Nav user={this.state.user} />
        <Switch>

          <Route path='/signup' render={(routerProps) => <NewUser history={routerProps.history} currentUser={this.currentUser} />} />
          <Route path='/users/:id' render={(routerProps) => <User {...routerProps} user={this.state.user} items={userItems} />} />

          <Route path='/newItem' component={NewItem} />
          <Route path='/items/:id' render={routerProps => <ItemShowPage {...routerProps} bids={this.state.bids} />} />

          <Route path='/' render={routerProps => <Items user={this.state.user} items={filteredItems} {...routerProps} />} />
        </Switch>
      </div>
    )
  }
}



export default App;
