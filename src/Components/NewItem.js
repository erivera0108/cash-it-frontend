import React from 'react'



class NewItems extends React.Component {


    render() {
        // console.log(this.props, this.state)
        return (
            <div className='new-item-form'>
                <form onSubmit={this.props.clickSubmit}>
                    <h2> Adding New Item </h2>
                    <input type="text"
                        onChange={this.props.handleInputChange}
                        name="category" value={this.props.category}
                        placeholder="Item Name" />
                    <input type='text' name='image' placeholder="Item URL" value={this.props.value} onChange={this.props.handleInputChange} />
                    <br />
                    <button type="submit">Submit</button>
                </form >
            </div>
        )
    }
}

export default NewItems