import React, { Component } from 'react';
import Card from './Card';

class Dribble extends Component {
  
  render() {
    if (this.props.gallery !== null) {
      return this.props.gallery.map((item) => {
      return <Card text={item} key={item.id}/>;
     }); 
   }
   return null;
 }

}

export default Dribble;



