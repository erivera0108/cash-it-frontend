import React from 'react'

const USER_URL = 'http://localhost:3000/api/v1/users'

class NewUser extends React.Component {
    state = {
        name: '',
        password_digest: '',
        username: '',
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clickSubmit = (e) => {
        e.preventDefault()
        fetch(USER_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                this.state
            )
        })
            .then(res => res.json())
            .then(newUser => {
                this.props.currentUser(newUser)
                this.setState({
                    name: '',
                    password_digest: '',
                    username: ''
                })
                this.props.history.push(`/users/${newUser.id}`)
            })
    }

    // pushUserToItemsPage = () => {
    //     const history = this.props.history
    //     history.push('/items')
    // }
    // onSubmit={clickSubmit}

    render() {
        console.log(this.state, this.props)
        return (
            <div className='new-user-sign-up'>
                <form  onSubmit={this.clickSubmit} id="userFormContainer" className="ui form container">
                    <div >
                        <h2> Name</h2>
                        <input type="text" onChange={this.handleInputChange} name="name" value={this.state.name} placeholder="First & Last Name" />
                    </div>
                    <div >
                        <h2> Username </h2>
                        <input type="text" onChange={this.handleInputChange} name="username" value={this.state.username} placeholder="Title here..." />
                    </div>
                    <div >
                        <h2> Password </h2>
                        <input type="text" onChange={this.handleInputChange} name="password_digest" value={this.state.password_digest} placeholder="Title here..." />
                    </div>
                    <div >
                        <button type="submit">Submit</button>
                    </div>
                </form >
            </div>
        )
    }
}

export default NewUser