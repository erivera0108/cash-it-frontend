import React from 'react'
import UserItemBids from './UserItemBids'
import NewBid from './NewBid'

const ITEMS_URL = 'http://localhost:3000/api/v1/items'


class ItemShowPage extends React.Component {
    state = {
        itemInfo: {}
    }

    itemId = this.props.match.params.id

    componentDidMount() {
        fetch(`${ITEMS_URL}/${this.itemId}`)
            .then(res => res.json())
            .then(itemInfo => {
                this.setState({ itemInfo })
            })
    }

    render() {
        const { bids, currentUser, addNewBid, updatingBidArray } = this.props
        const { id, user_id } = this.state.itemInfo

        const filteredBids = bids.filter(bid => bid.item_id === id)
        console.log(this.props)

        return (
            <div className='item-card'>
                Item's Show page
                {currentUser.id === user_id ? null : <NewBid currentUser={currentUser} itemId={id} addNewBid={addNewBid} />}
                <br />
                Potential Buyers: {filteredBids.length}
                <br />
                <br />
                {user_id === currentUser.id ?
                    filteredBids.map(bid => <UserItemBids key={bid.id} updatingBidArray={updatingBidArray} itemOwner={user_id} currentUser={currentUser} bid={bid} />)
                    : null}
                <br />
            </div>

        )
    }
}

export default ItemShowPage