import React from 'react'
import ItemCard from './ItemCard'


class Items extends React.Component{

    render(){
        // console.log(this.props)
        return (
            <div>
                {this.props.items.map( item => <ItemCard  history={this.props.history} key={item.id} itemInfo={item}/>)}
            </div>
        )
    }
}

export default Items