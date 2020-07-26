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
            .then(owner => {
                this.setState({ owner })
            })
    }

    render() {
        const { id, category, image } = this.props.itemInfo
        const { history, loaded, deleteItem } = this.props
        console.log(this.props.itemInfo)

        return (
            <div>
                <div className='item-cards-styles' onClick={() => history.push(`/items/${id}`)} >
                    <img className='item-pic' src={'http://localhost:3000' + image} alt={category} />
                    Owner: {this.state.owner.name} <br />
                    Category: {category}
                    {loaded ? <button onClick={() => deleteItem(id)}> Delete </button> : null}
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