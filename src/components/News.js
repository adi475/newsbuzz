import React, { Component } from "react";
import Newsitem from "./Newsitem.js";
import Spinner from "./Spinner.js";
import PropTypes from 'prop-types';



export default class News extends Component {

  static defaultProps = {
        country: "in",
        pageSize: 10,
        category: "general",
  }

  static propTypes ={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      Article: [],
      loading: false,
      page: 1,
      totalResults: 70,
    };
  }


  //componentDidMount is a life cycle method which runs after render. it is an asynchrounsied function.
     // await keyword  can be used in async function to wait for the completion of that particular statement and then proceed further.

  async updateNews() {

    const url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5b28105830da47ffaff4ced94d7b00ca&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      Article: parsedData.articles,                //here "articles" is the array of news items in the data fetched by an Api.
      totalResults: parsedData.totalResults,
      loading: false
    });

  }

 async componentDidMount() {

    this.updateNews()

  }


  handleOnPrev = async () => {

    this.setState({page: this.state.page - 1});
    this.updateNews()
    
  }


  handleOnNxt = async () => {

  this.setState({page: this.state.page + 1});
  this.updateNews()

  }


  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">newsBuzz-Topheadlines</h1>
        <hr />
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!(this.state.loading) && this.state.Article.map((element) => {
            return (
              <div className="col md-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  Url={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            className="btn btn-dark"
            onClick={this.handleOnPrev}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button className="btn btn-dark" onClick={this.handleOnNxt} disabled={Math.ceil(this.state.totalResults/this.props.pageSize) < this.state.page+1}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
