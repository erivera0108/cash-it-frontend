import React from 'react'



class NewItems extends React.Component {
   

    render() {
        // console.log(this.props, this.state)
        return (
            <div className='new-item-form'>
                <form onSubmit={this.props.clickSubmit}>
                    <div >
                        <h2> Category </h2>
                        <input type="text"
                            onChange={this.props.handleInputChange}
                            name="category" value={this.props.category}
                            placeholder="Item Category" />
                        <br/>

                        <button type="submit">Submit</button>
                    </div>
                </form >
            </div>
        )
    }
}

export default NewItems