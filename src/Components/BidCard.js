import React from 'react'

const ITEM_URL = 'http://localhost:3000/api/v1/items'

class BidCard extends React.Component {
    state = {
        item: {}
    }

    componentDidMount() {
        const itemId = this.props.bidInfo.item_id
        fetch(`${ITEM_URL}/${itemId}`)
            .then(res => res.json())
            .then(item => {
                this.setState({ item })
            })
    }

    render() {
        const { bidInfo, deleteBid, loaded } = this.props
        const { item } = this.state
        console.log(item)
        return (
            <div>
                Item: {item.category}
                <br />
                Offer: {bidInfo.offer}
                <br />
                Accepted?
                <div>
                    {loaded ? <button onClick={() => deleteBid(bidInfo.id)}> Delete </button> : null}
                    <br />
                    <br />
                </div>
            </div>

        )
    }
}

export default BidCard

// "id": 1,
// "user_id": 13,
// "item_id": 19,
// "offer": 0,