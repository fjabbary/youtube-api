import React, { Component } from 'react'


export default class SearchBar extends Component {

  state = {
    term: ''
  }

  // Handle changes for input
  changeHandler = (e) => {
    this.setState({
      term: e.target.value
    })
  }

  // Handle form
  submitForm = (e) => {
    e.preventDefault();

    this.props.submit(this.state.term)
    this.setState({
      term: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <div className="ui icon input" style={{ width: '100%' }}>
            <input type="text" placeholder="Search..."
              value={this.state.term}
              onChange={this.changeHandler}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    )
  }
}
