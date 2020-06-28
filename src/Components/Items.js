import React from 'react'
import ItemCard from './ItemCard'

const ITEMS_URL ='http://localhost:3000/api/v1/items'

class Items extends React.Component{
    state = {
        items: []
    }

    componentDidMount() {
        fetch(ITEMS_URL)
        .then( res => res.json())
        .then( items => {
            this.setState({
                items
            })
        } )
    }

    render(){
        // console.log(this.props)
        return (
            <div>
                {this.state.items.map( item => <ItemCard history={this.props.history} key={item.id} itemInfo={item}/>)}
            </div>
        )
    }
}

export default Items