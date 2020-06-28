import React from 'react'

class ItemCard extends React.Component {

    render() {
        // console.log(this.props)
        const {id, category, user_id } = this.props.itemInfo

        return(
            <div>
                Category: {category}
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