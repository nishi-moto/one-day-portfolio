  
import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

class Card extends Component {
  render() {
    return (
      <div>
      <Link to={'./detail/' + this.props.text.id}>
      <div className="card">
        <h1>{this.props.text.title}</h1>
        <img src ={this.props.text.images.hidpi} alt="{this.props.text.title}" />
      </div>
      </Link>
     </div>
    )
  }
}

export default Card;