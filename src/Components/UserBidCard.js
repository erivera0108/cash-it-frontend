import React from 'react'

const ITEM_URL = 'http://localhost:3000/api/v1/items'
const BID_URL = 'http://localhost:3000/api/v1/bids'

class UserBidCard extends React.Component {
    state = {
        item: {},
        updateToggle: false,
        updatedOffer: ''
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    toggleUpdateState = () => {
        this.setState({
            updateToggle: !this.state.updateToggle
        })
    }

    clickSubmit = (e) => {
        e.preventDefault()
        const bidId = this.props.bidInfo.id
        fetch(`${BID_URL}/${bidId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                offer: this.state.updatedOffer
            })
        })
            .then(res => res.json())
            // .then(console.log)
            .then(updatedBid => {
                this.props.updatingBidOffer(bidId, updatedBid.offer)
                this.setState({
                    updateToggle: !this.state.updatedOffer,
                    updatedOffer: ''
                })
            })

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
        const { bidInfo, deleteBid, loaded, updatingBidOffer } = this.props
        const { item, updateToggle } = this.state
        console.log(this.props)
        return (
            <div>
                {/* Owner: {owner.name} */}
                Item: {item.category}
                <br />
                Offer: {bidInfo.offer}
                <br />
                Accepted?
                <div>
                    {loaded ?
                        <div>
                            <button onClick={() => deleteBid(bidInfo.id)}> Delete </button>
                            <br />
                            <button onClick={this.toggleUpdateState}> Change Offer </button>
                            {updateToggle ?
                                <form onSubmit={this.clickSubmit}>
                                    <input type="text" onChange={this.handleInputChange} name="updatedOffer" value={this.state.updatedOffer} placeholder="New Offer" />
                                    <button type="submit">Submit</button>
                                </form>
                                : null}
                        </div>
                        : null}
                </div>
            </div>

        )
    }
}

export default UserBidCard

// "id": 1,
// "user_id": 13,
// "item_id": 19,
// "offer": 0,