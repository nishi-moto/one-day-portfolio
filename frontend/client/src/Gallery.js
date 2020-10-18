import React, { Component } from 'react';
import Dribble from './Dribble';
import Tags from './Tags';
const fetch = require('node-fetch');

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    fetchData = (tag) => {
        let api = 'http://localhost:8000/portfolio/';

        if(typeof tag !== 'undefined' && tag !== ''){
            api = `${api}?tag=${tag}`;
        }
        fetch(api)
          .then(res => res.json())
          .then(data => this.setState({data}));
    }

    handleTagChange = tag => {
      this.fetchData(tag.target.value);
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <div className="Gallery">
                <Tags handleTagChange={this.handleTagChange} />
                <div className="galleryWrapper">
                <Dribble gallery={this.state.data}/>
                </div>
            </div>
        );
    }
}

export default Gallery;
