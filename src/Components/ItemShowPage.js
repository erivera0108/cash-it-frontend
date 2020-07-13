import React from 'react'

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
        const { bids } = this.props
        const { id, category, user_id } = this.state.itemInfo

        const filteredBids = bids.filter(bid => bid.item_id === id)
        console.log(filteredBids)

        return (
            <div>
                <div>
                    Item's Show page
                </div>
                <br />
                Category: {category}
                <br/>
                Offers:
                {` ${filteredBids.map(bid => bid.offer)}`}
                {/* bid info component here 
                {` ${filteredBids.map(bid => <BidInfo bidData={bid} />)}`}
                */}
                
                <br />
                Potential Buyers: {filteredBids.length}
            </div>
        )
    }
}

export default ItemShowPage