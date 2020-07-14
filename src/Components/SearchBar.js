import React from 'react'

class SearchBar extends React.Component{
    
    render(){
        console.log(this.props)
        const {value, onChange} = this.props
        return (
            <div>
                <div className='search-bar'> 
                    <input placeholder='Search here' name='searchTerm'  value={value} onChange={onChange} />
                </div>
            </div>
        )
    }
}

export default SearchBar 