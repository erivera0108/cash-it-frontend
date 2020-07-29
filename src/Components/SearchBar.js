import React from 'react'

class SearchBar extends React.Component {

    render() {
        // console.log(this.props)
        const { value, onChange, clearSearch } = this.props
        return (
            <div className='search-bar'>
                <input placeholder='Search here' name='searchTerm' value={value} onBlur={clearSearch} onChange={onChange} />
            </div>
        )
    }
}

export default SearchBar 