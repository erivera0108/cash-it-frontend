import React from 'react'
import SearchBar from './SearchBar'
import Menu from './Menu'

class Nav extends React.Component {

    state={
        menu: false,
    }

    mainHandler = e => {
        if(this.state.menu === true){
            this.setState({
                menu: false
            })
        }else{
            this.setState({
                menu: true
            })
        }
    }

    focusOut = e => {
        this.setState({
            menu: false
        })
    }

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
                <div onClick={this.mainHandler} className='menu'>
                    ☰
                </div >
                <Menu menu={this.state.menu}  mouseOut={this.mainHandler}/>
            </div>

        )
    }
}
export default Nav