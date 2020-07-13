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

  addNewItem = newItem => {
    this.setState({
      items: [...this.state.items, newItem]
    })
  }

  componentDidMount() {
    // Comment out the user fetch below to enable signup 
    const id = 2
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

  deleteItem = id => {
    fetch(`${ITEMS_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(this.setState({
        items: this.state.items.filter(item => item.id !== id)
      }))
  }


  render() {
    const filteredItems = this.state.items.filter(item => item.user_id !== this.state.user.id)
    const userItems = this.state.items.filter(item => item.user_id === this.state.user.id)

    // console.log('current user:', this.state.user, 'filtered items', filteredItems)

    return (
      <div>
        <Nav user={this.state.user} />
        <Switch>

          <Route path='/signup' render={(routerProps) => <NewUser history={routerProps.history} currentUser={this.currentUser} />} />
          <Route path='/users/:id' render={(routerProps) => <User {...routerProps} deleteItem={this.deleteItem} user={this.state.user} items={userItems} />} />

          <Route path='/newItem' render={routerProps => <NewItem {...routerProps} user={this.state.user} addNewItem={this.addNewItem} />} />
          <Route path='/items/:id' render={routerProps => <ItemShowPage {...routerProps} currentUser={this.state.user} bids={this.state.bids} />} />

          <Route path='/' render={routerProps => <Items user={this.state.user} items={filteredItems} {...routerProps} />} />
        </Switch>
      </div>
    )
  }
}



export default App;
