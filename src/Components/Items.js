import React from 'react'
import ItemCard from './ItemCard'


class Items extends React.Component {

    render() {
        // console.log(this.props)
        return (
            <ul className='item-index-page'>
                <div id='welcome'>
                    {this.props.user.username ? <h1>Welcome {this.props.user.username} </h1> : ''}
                </div>
                    {this.props.items.map(item =>
                        <ItemCard history={this.props.history}
                            loaded={false}
                            key={item.id}
                            itemInfo={item} />)}
            </ul>
        )
    }
}

export default Items