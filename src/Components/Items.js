import React from 'react'
import ItemCard from './ItemCard'


class Items extends React.Component {

    render() {
        // console.log(this.props)
        return (
            <div className='item-index-page'>
                <div id='welcome'>
                    {this.props.user.username ? <h2>Welcome {this.props.user.username} </h2> : ''}
                </div>
                <div>
                    {this.props.items.map(item =>
                        <ItemCard history={this.props.history}
                            loaded={false}
                            key={item.id}
                            itemInfo={item} />)}
                </div>
            </div>
        )
    }
}

export default Items