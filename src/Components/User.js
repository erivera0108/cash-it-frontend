import React from 'react'
import ItemCard from './ItemCard'


class User extends React.Component {

    render() {
        const { id, name, username } = this.props.user
        const { history } = this.props

        console.log(this.props)
        return (
            <div>
                User Show Page
                <div>
                    id: {id}
                    name {name}
                    Username: {username}
                </div>
                <br />
                <div>
                    User's Items
                    {this.props.items.map(item => <ItemCard itemInfo={item} history={history} />)}
                </div>
            </div>
        )
    }
}

export default User