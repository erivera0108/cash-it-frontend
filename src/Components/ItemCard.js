import React from 'react'

const USER_URL = 'http://localhost:3000/api/v1/users'
const ITEMS_URL = 'http://localhost:3000/api/v1/items'


class ItemCard extends React.Component {
    state = {
        owner: {},
        itemInfo: {}

    }

    componentDidMount() {
        const id = this.props.itemInfo.user_id
        fetch(`${USER_URL}/${id}`)
            .then(res => res.json())
            .then(owner => {
                this.setState({ owner })
            })

        fetch(`${ITEMS_URL}/${this.props.itemInfo.id}`)
            .then(res => res.json())
            .then(itemInfo => {
                this.setState({ itemInfo })
            })

    }

    render() {
        const { id, category } = this.props.itemInfo
        const { history, loaded, deleteItem } = this.props
        console.log(this.state.itemInfo)

        return (
            <div>
                <div className='item-cards-styles'  >
                    <img onClick={() => history.push(`/items/${id}`)} className='item-pic' src={this.state.itemInfo.image} alt={category} />
                    Owner: {this.state.owner.name} <br />
                    Category: {category}
                    {loaded ? <button className='deleteButton' onClick={() => deleteItem(id)}> Delete </button> : null}
                </div>
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