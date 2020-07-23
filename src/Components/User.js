import React from 'react'
import ItemCard from './ItemCard'
import UserBidCard from './UserBidCard'


class User extends React.Component {

    render() {
        const { id, name, username, image } = this.props.user
        const { history, items, deleteItem, bids, deleteBid, updatingBidOffer } = this.props

        console.log(this.props.user)
        return (
            <div className='user-body'>
                <div className='user-profile'>
                    User Show Page
                    id: {id}
                    <br />
                    name {name}
                    <br />
                    Username: {username}
                    <br />
                    <img src={image} alt={name}/>
                    <button onClick={() => history.push('/newItem')} > Add new Item to sell </button>
                </div>
                <br />
                <div className='user-items'>
                    User's Items to Sell
                    {items.map(item => <ItemCard key={item.id} deleteItem={deleteItem} loaded={true} itemInfo={item} history={history} />)}
                </div>
                <div className='user-bids'>
                    User's Bids
                    {bids.map(bid => <UserBidCard key={bid.id} bidInfo={bid} deleteBid={deleteBid} updatingBidOffer={updatingBidOffer} loaded={true} username={username} />)}
                </div>
                <div>
                </div>
            </div>
        )
    }
}

export default User