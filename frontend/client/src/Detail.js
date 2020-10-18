import React, { Component } from 'react';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  fetchData = (tag) => {
    const detailId = this.props.match.url.split('/')[2];

    let api = `http://localhost:8000/portfolio/${detailId}`;
    console.log(api);

    fetch(api)
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    let title = '';
    let img = '';
    let description = '';
    let publishedAt = '';

    if(this.state.data !== null){
      title = this.state.data.title;
      img= this.state.data.images.hidpi;
      description = this.state.data.description;
      if(description !== null){
        description = description.replace('<p>','');
        description = description.replace('</p>','');
      }
      publishedAt = this.state.data.published_at;
      publishedAt = publishedAt.split('T')[0];

    }

    return (
      <div className="Detail">
        <div>
          <h2>{title}</h2>
          <img id="img_detail" src ={img} alt={title} />
        </div>
        <div id="detail_description">
          <p>{description}</p>
          <p>{publishedAt}</p>
        </div>
      </div>
    )
  }
}

export default Detail;