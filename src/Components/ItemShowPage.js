import React from 'react'
import UserItemBids from './UserItemBids'
import NewBid from './NewBid'

const ITEMS_URL = 'http://localhost:3000/api/v1/items'
const BID_URL = 'http://localhost:3000/api/v1/bids'


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

    maxOffer = array => {
        const solution = array.sort((a, b) => a.offer - b.offer)
        const highestOffer = solution[solution.length - 1]
        return highestOffer
    }

    render() {
        const { bids, currentUser, addNewBid, updatingBidArray } = this.props
        const { id, user_id, image, category } = this.state.itemInfo

        const filteredBids = bids.filter(bid => bid.item_id === id)
        const highestBid = this.maxOffer(filteredBids)
        const availability = filteredBids.map(bid => bid.accepted)
        console.log(availability)

        return (
            <div className='item-card'>
                Item's Show page
                <img src={image} alt={category} />

                {currentUser.id === user_id ? null : <NewBid currentUser={currentUser} itemId={id} addNewBid={addNewBid} />}
                <br />
                Highest Offer: {highestBid ? highestBid.offer : ''}
                <br />
                Potential Buyers: {filteredBids.length}

                <br />
                <br />

                {
                    availability.length === 0 ? '' : 
                    availability.includes(true) ?
                     'Item has been sold' :
                        (user_id === currentUser.id ?
                            filteredBids.map(bid => <UserItemBids key={bid.id} updatingBidArray={updatingBidArray} itemOwner={user_id} currentUser={currentUser} bid={bid} />)
                            : null)
                }
                <br />
            </div>

        )
    }
}

export default ItemShowPage