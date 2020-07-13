import React from 'react'

const USER_URL = 'http://localhost:3000/api/v1/users'

class BidCardInfo extends React.Component {
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


    render() {
        console.log(this.props)
        const { offer } = this.props.bid

        return (
            <div>
                Offer: {offer}
                <br />
                Owner Name: {this.state.owner.name}
                <br />
                <br />
            </div>
        )
    }
}

export default BidCardInfo

// created_at: "2020-06-29T17:07:00.446Z"
// id: 10
// item_id: 1
// offer: 6
// updated_at: "2020-06-29T17:07:00.446Z"
// user_id: 13