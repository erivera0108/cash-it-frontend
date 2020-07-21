import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom';


class Nav extends React.Component {


    render() {
        const { onChange, value } = this.props
        return (
            <div>
                <div className="nav-bar"  >
                    <Link className="links" to='/'>Home</Link>
                    <Link className="links" to={`/users/${this.props.user.id}`} >Profile</Link>
                    <SearchBar onChange={onChange} value={value} />
                    <Link className="links" to='/signup' >Signup</Link>
                </div>
            </div>

        )
    }


}

export default Nav
