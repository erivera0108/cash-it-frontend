import React from 'react'
import { Link } from 'react-router-dom';

class Menu extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div id='drop-down'>
                <div onMouseLeave={this.props.mouseOut} style={{display: this.props.menu ? 'block' : 'none' }}>
                    <Link to="/" className="item font_24 font_blue">Shop </Link>
                    <Link to={`/users/${this.props.userId}`} className="item font_24 font_blue">Profile</Link>
                    <Link to="/signup" className="item font_24 font_blue">Sign Up / Log In</Link>
                </div>
            </div>
        )
    }
}

export default Menu 