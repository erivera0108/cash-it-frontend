import React from 'react'
import { Link } from 'react-router-dom';

class Menu extends React.Component {

    render() {

        return (
            <div id='drop-down'>
                <div onMouseLeave={this.props.mouseOut} style={{display: this.props.menu ? 'block' : 'none' }}>
                    <Link to="/" >Shop </Link>
                    <Link to={`/users/${this.props.userId}`} >Profile</Link>
                    <Link to="/signup" >Sign Up / Log In</Link>
                </div>
            </div>
        )
    }
}

export default Menu 