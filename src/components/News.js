  import React, { Component } from 'react'
  import NewsItem from './NewsItem'
  import Spinner from './spinner';

  export default class News extends Component {

  articles=[]
      constructor(){
          super();
          this.state={
              articles: this.articles,
              loading: false,
              page: 1
          }
      }
      handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ee259c7ea6fe43a2b759bf6f40064d3a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        
        let data = await fetch(url);
        this.setState({loading:true})
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }
      handleNextClick = async () => {
        console.log("Next");
        // let temp=this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize);
        //  if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
        //   console.log("Running this part");
        // }
        // else 
        {
          //  "console.log(temp);
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ee259c7ea6fe43a2b759bf6f40064d3a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            this.setState({loading: true})
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
          }
    }
      async componentDidMount(){
          let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=ee259c7ea6fe43a2b759bf6f40064d3a&page=1&pageSize=${this.props.pageSize}`
          this.setState({loading: true})
          let data=await fetch(url);
          
          let parsedData=await data.json();
          this.setState({articles: parsedData.articles, loading:false, totalResults:parsedData.totalResults})

      }
    render() {
      return (
        <div className='container my-3'>
          <h2 className='text-center'>NewsMonkey - Top Headlines</h2>
          {this.state.loading && <Spinner/>}
          <div className="row" >
        {!this.state.loading && this.state.articles.map((element)=>{
              return<div className="col-sm-12 col-md-6 col-lg-4"  key={element.url}>
              <NewsItem title={element.title?element.title:""} datepub={element.publishedAt?element.publishedAt:""} description={element.description?element.description:"" } imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>})}
            
              
              
              </div>
              <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr;
          Previous</button>
      <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults /12))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
      
  </div>
          
        </div>
      )
    }
  }
