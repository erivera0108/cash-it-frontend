import React from 'react'

const ITEM_URL = 'http://localhost:3000/api/v1/items'


class NewItems extends React.Component{
    state = {
        category: ''
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clickSubmit = (e) => {
        e.preventDefault()
        const user = this.props.user
        fetch(ITEM_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                category: this.state.category,
                user_id: user.id
            })
        })
            .then(res => res.json())
            .then(newItem => {
                // console.log(newItem)
                this.props.addNewItem(newItem)
                this.setState({
                    category: '',
                })
                this.props.history.push(`/users/${user.id}`)
            })
    }

    render(){
        console.log(this.props, this.state)
        return (
            <div>
                <form  onSubmit={this.clickSubmit} id="userFormContainer" className="ui form container">
                    <div >
                        <h2> Category </h2>
                        <input type="text" onChange={this.handleInputChange} name="category" value={this.state.category} placeholder="Item Category" />
                    </div>
                    <div >
                        <button type="submit">Submit</button>
                    </div>
                </form >
            </div>
        )
    }
}

export default NewItems