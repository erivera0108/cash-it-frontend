import React from 'react'

const USER_URL = 'http://localhost:3000/api/v1/users'
const BID_URL = 'http://localhost:3000/api/v1/bids'

class UserItemBids extends React.Component {
    state = {
        owner: {}
    }

    componentDidMount() {
        const id = this.props.bid.user_id
        fetch(`${USER_URL}/${id}`)
            .then(res => res.json())
            .then(user => {
                this.setState({
                    owner: user
                })
            })
    }

    toggleClick = id => {
        console.log('props', this.props.bid.accepted, id)
        fetch(`${BID_URL}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                accepted: !this.props.bid.accepted
            })
        })
            .then(res => res.json())
            // .then(console.log)
            this.props.updatingBidArray(id)
    }

    // Update the frontend to show the new bid changes 

render() {
    console.log(this.props)
    const { bid } = this.props

    return (
        <div>
            Owner Name: {this.state.owner.name}
            <br />
                Offer: {bid.offer}
            <br />
            <button onClick={() => this.toggleClick(bid.id)} > Accept Offer </button>
            <br />
            <br />
        </div>
    )
}
}

export default UserItemBids

// created_at: "2020-06-29T17:07:00.446Z"
// id: 10
// item_id: 1
// offer: 6
// updated_at: "2020-06-29T17:07:00.446Z"
// user_id: 13