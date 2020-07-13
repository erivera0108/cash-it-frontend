import React from 'react'
import ItemCard from './ItemCard'


class User extends React.Component {

    render() {
        const { id, name, username } = this.props.user
        const { history, deleteItem } = this.props

        // console.log(this.props)
        return (
            <div>
                User Show Page
                <div>
                    id: {id}
                    name {name}
                    Username: {username}
                </div>
                <br />
                <button onClick={() => history.push('/newItem')} > Add new Item to sell </button>
                <div>
                    User's Items
                    {this.props.items.map(item => <ItemCard key={item.id} deleteItem={deleteItem} loaded={true} itemInfo={item} history={history} />)}
                </div>
                <div>
                </div>
            </div>
        )
    }
}

export default User