import React from 'react'
import ItemCard from './ItemCard'
import UserBidCard from './UserBidCard'


class User extends React.Component {

    render() {
        const { id, name, userName } = this.props.user
        const { history, items, deleteItem, bids, deleteBid, updatingBidOffer } = this.props

        console.log(this.props.bids)
        return (
            <div className='user-body'>
                <div className='user-profile'>
                    User Show Page
                    id: {id}
                    <br />
                    name {name}
                    <br />
                    Username: {userName}
                    <br />
                    <button onClick={() => history.push('/newItem')} > Add new Item to sell </button>
                </div>
                <br />
                <div className='user-items'>
                    User's Items to Sell
                    {items.map(item => <ItemCard key={item.id} deleteItem={deleteItem} loaded={true} itemInfo={item} history={history} />)}
                </div>
                <div className='user-bids'>
                    User's Bids
                    {bids.map(bid => <UserBidCard key={bid.id} bidInfo={bid} deleteBid={deleteBid} updatingBidOffer={updatingBidOffer} loaded={true} userName={userName} />)}
                </div>
                <div>
                </div>
            </div>
        )
    }
}

export default User