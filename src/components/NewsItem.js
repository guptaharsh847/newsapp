import React, { Component } from 'react'

export default class NewsItem extends Component {
    
  render() {
    let {title,description, imageUrl, newsUrl,datepub}=this.props;
    return (
      <div className='my-3 mx-2'><div className="card" style={{width: "18rem", height:"32rem"}}>
      <img src={!imageUrl?'https://timesofindia.indiatimes.com/thumb/msid-79587724,width-1200,height-900,resizemode-4/79587724.jpg':imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}..</h5>
        <h6 className="text-muted">Published Date {datepub.slice(0,10)}</h6>
        <p className="card-text">{description.slice(0,100)}....<strong >Click below to read more</strong></p>
        <a href={newsUrl }className="btn btn-dark btn position-absolute bottom-0 end-0 " style={{marginRight: "10px", marginBottom:"20px"}}>Read More</a>
      </div>
    </div></div>
    )
  }
}
