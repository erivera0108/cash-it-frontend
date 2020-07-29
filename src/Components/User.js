import React from 'react'
import ItemCard from './ItemCard'
import UserBidCard from './UserBidCard'
import NewItem from './NewItem'
import { DirectUpload } from "activestorage";

const ITEM_URL = 'http://localhost:3000/api/v1/items'


class User extends React.Component {
    state = {
        newFormToggle: false,
        category: '',
        image: ''
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    toggleState = () => {
        this.setState({
            newFormToggle: !this.state.newFormToggle
        })
    }

    uploadFile = (image, item) => {
        const upload = new DirectUpload(image, 'http://localhost:3000/rails/active_storage/direct_uploads')
        upload.create((error, blob) => {
            if (error) {
                console.log(error)
            } else {
                console.log('no error')
            }
        })
    }

    clickSubmit = (e) => {
        e.preventDefault()
        const user = this.props.user
        fetch(ITEM_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                category: this.state.category,
                user_id: user.id,
                image: this.state.image
            })
        })
            .then(res => res.json())
            .then(newItem => {
                console.log(newItem)
                // this.uploadFile(this.state.image, newItem)
                this.props.addNewItem(newItem)
                this.setState({
                    category: '',
                    image: ''
                })

            })
    }

    render() {
        const { id, name, username, image } = this.props.user
        const { history, items, deleteItem, userBids, deleteBid, updatingBidOffer } = this.props

        console.log(this.state)
        return (
            <div className='user-body'>
                <div className='user-profile'>
                    User Show Page

                    <img className='user-pic' src={image} alt={name} />
                    <p> Name: {name}
                        <br />
                    Username: {username} </p>
                    <button id='add-item' onClick={this.toggleState} > Add new Item to sell </button>
                    {this.state.newFormToggle ? <NewItem
                        clickSubmit={this.clickSubmit}
                        handleInputChange={this.handleInputChange}
                        category={this.state.category} />
                        : null}
                </div>

                <div className='user-items'>
                    <p> User's Items to Sell </p>
                    {items.map(item => <ItemCard key={item.id} deleteItem={deleteItem} loaded={true} itemInfo={item} history={history} />)}
                </div>
                <div className='user-bids'>
                    <p> User's Bids </p>
                    {userBids.map(bid => <UserBidCard history={history} key={bid.id} bidInfo={bid} deleteBid={deleteBid} updatingBidOffer={updatingBidOffer} loaded={true} username={username} />)}
                </div>
                <div>
                </div>
            </div>
        )
    }
}

export default User