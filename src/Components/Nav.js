import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom';


class Nav extends React.Component {


    render() {
        const { onChange, value, clearSearch, changeUser } = this.props
        return (
            <div>
                <div className="nav-bar"  >
                    <Link className="links" to='/'>Home</Link>
                    <Link className="links" to={`/users/${this.props.user.id}`} >Profile</Link>
                    <SearchBar clearSearch={clearSearch} onChange={onChange} value={value} />
                    <button id='hidden-switch-1' onClick={() => changeUser(1)} ></button>
                    <button id='hidden-switch-2' onClick={() => changeUser(2)} ></button>
                </div>
            </div>

        )
    }


}

export default Nav
