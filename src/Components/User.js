import React from 'react'


class User extends React.Component {

    render() {
        const {id, name, username} = this.props.user
        console.log(this.props)
        return (
            <div>
                User Show Page
                <div>
                    id: {id}
                    name {name}
                    Username: {username}
                </div>
            </div>
        )
    }
}

export default User