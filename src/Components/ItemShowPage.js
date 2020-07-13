import React from 'react'
import BidCardInfo from './BidCardInfo'

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
        const { bids, currentUser } = this.props
        const { id, category, user_id } = this.state.itemInfo

        const filteredBids = bids.filter(bid => bid.item_id === id)
        console.log(filteredBids)

        return (
            <div>
                <div>
                    Item's Show page
                </div>
                <button>Place and Offer Here</button>
                <br />
                Potential Buyers: {filteredBids.length}
                <br />
                <br />

                {user_id === currentUser.id ?
                    filteredBids.map(bid => <BidCardInfo key={bid.id} itemOwner={user_id} currentUser={currentUser} bid={bid} />)
                    : null}
                <br />
            </div>
        )
    }
}

export default ItemShowPage