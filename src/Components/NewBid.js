import React from 'react'

const BIDS_URL = 'http://localhost:3000/api/v1/bids'

class NewBid extends React.Component {
    state = {
        offer: ''
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    // "user_id": 13,
    // "item_id": 19,
    // "offer": 0,

    clickSubmit = (e) => {
        e.preventDefault()
        const userId = this.props.currentUser.id
        const itemId = this.props.itemId
        fetch(BIDS_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                item_id: itemId,
                user_id: userId,
                offer: this.state.offer
            })
        })
            .then(res => res.json())
            .then(newBid => {
                // console.log(newBid)
                this.props.addNewBid(newBid)
                this.setState({
                    offer: '',
                })
            })
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <form onSubmit={this.clickSubmit} >
                    <input placeholder='offer' name='offer' value={this.state.offer} onChange={this.onChange} />
                    <button> Place Your Offer </button>
                </form>
            </div>
        )
    }
}

export default NewBid


