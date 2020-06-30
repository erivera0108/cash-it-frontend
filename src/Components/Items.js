import React from 'react'
import ItemCard from './ItemCard'


class Items extends React.Component {

    render() {
        // console.log(this.props)
        return (
            <div>
                {this.props.user.username ? `Welcome, ${this.props.user.username}` : ''}
                {this.props.items.map(item => <ItemCard history={this.props.history} loaded={false} key={item.id} itemInfo={item} />)}
            </div>
        )
    }
}

export default Items