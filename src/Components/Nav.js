import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom';


class Nav extends React.Component {


    render() {
        const { onChange, value } = this.props
        return (
            <div>
                <div className="left-side-nav">
                    <Link to='/'>Home</Link>
                    <Link to={`/users/${this.props.user.id}`} >Profile</Link>
                    <Link to='/signup' >Signup</Link>
                </div>
                <div className='search-bar'>
                    <SearchBar onChange={onChange} value={value} />
                </div>
            </div>

        )
    }


}

export default Nav
