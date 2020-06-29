import React from 'react'

const USER_URL = 'http://localhost:3000/api/v1/users'


class ItemCard extends React.Component {
    state = {
        owner: {}
    }

    componentDidMount() {
        const id = this.props.itemInfo.user_id
        fetch(`${USER_URL}/${id}`)
            .then(res => res.json())
            .then(user => {
                this.setState({
                    owner: user
                })
            })
    }

    render() {
        // console.log(this.props)
        const { id, category} = this.props.itemInfo
        const { history } = this.props

        return (
            <div onClick={()=> history.push(`/items/${id}`)} >
                Owner: {this.state.owner.name} <br />
                Category: {category}
                <br />
                <br />
            </div>
        )
    }
}

export default ItemCard

// category: "Stove"
// created_at: "2020-06-25T14:55:17.023Z"
// id: 1
// updated_at: "2020-06-25T14:55:17.023Z"
// user_id: 7