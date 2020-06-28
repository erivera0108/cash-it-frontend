import React from 'react'
import SearchBar from './SearchBar'
import Menu from './Menu'

class Nav extends React.Component {




    render() {
        return (
            <div>
                <div className="left-side-nav">
                    <p>Home</p>
                    <p>Items Page</p>
                </div>
                <div className='search-bar'>
                    <SearchBar />
                </div>
                <div className='menu'>
                    ☰
                </div >
                <Menu />
            </div>

        )
    }
}
export default Nav