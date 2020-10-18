import React, { Component } from 'react';
// import { Dropdown, DropdownMenu, DropdownButton, DropdownItem } from 'reactstrap';

class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  fetchData = () => {
    fetch('http://localhost:8000/portfolio/tags')
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  componentDidMount() {
    this.fetchData();
  }

   generateDropDown() {
    if (this.state.data !== null) {
      return this.state.data.map((item) => {
        return <option value={item} key={item} >{item}</option>;
      });
    }
  }

  render() {
    return (
      <select className="tag" onChange={this.props.handleTagChange}>
        <option value="" key="default" > Choose a category... </option>
       {  this.generateDropDown() }
      </select>
    );
  }

  
}

export default Tags;