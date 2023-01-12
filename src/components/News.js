import React , {useState , useEffect} from 'react'
import Newsitem from "./Newsitem.js";
import Spinner from "./Spinner.js";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {

  const [Article, setArticle] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalresults] = useState(0);


     // await keyword  can be used in async function to wait for the completion of that particular statement and then proceed further.

      const updateNews = async() => {

      props.updateProgress(5);
     const url =
       `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
       setLoading(true);
     let data = await fetch(url);
     let parsedData = await data.json();
     props.updateProgress(40);
     console.log(parsedData);
     setArticle(parsedData.articles);             //here "articles" is the array of news items in the data fetched by an Api.
     setTotalresults(parsedData.totalResults);
     setLoading(false);
    
     props.updateProgress(100);               
      
   }

   useEffect(() => {
    
    updateNews();
  
    // eslint-disable-next-line       
  }, [])                          // here empty array is used as a dependency of useEffect means execution of useEffect depends on the state of the variable enclosed in the array. whenever state of variable changes then useEffect executes. if we use empty array as dependency then useEffect executes only on the initial(first) rendering of the component.

 const fetchMoreData = async() => {

    const url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();
    setPage(page+1);
    setArticle(Article.concat(parsedData.articles));             
    setTotalresults(parsedData.totalResults);
   

  }

  
//  const handleOnPrev = async() => {

//     setPage(page-1);
//     updateNews()

//   }


//  const handleOnNxt = async () => {

//   setPage(page+1);
//   updateNews()

//   }


  return (
  <>

<h1 className="text-center my-4">newsBuzz - Top {props.category} Headlines</h1>
        <hr />
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={Article.length}
          next={fetchMoreData}
          hasMore={Article.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className="container my-3">
        <div className="row">

          {/* {!(loading) && Article.map((element) => { */}

           {Article.map((element) => {
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
        </div>
        </InfiniteScroll>


    {/* <div className="container d-flex justify-content-between">
    <button
      className="btn btn-dark"
      onClick={handleOnPrev}
      disabled={page <= 1}
    >
      &larr; Previous
    </button>
    <button className="btn btn-dark" onClick={handleOnNxt} disabled={Math.ceil(totalResults/props.pageSize) < page+1}>
      Next &rarr;
    </button>
  </div> */}

  </>
  )

}


  News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
}

 News.propTypes ={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}




  /* whole code in class based components */

// import React, { Component } from "react";
// import Newsitem from "./Newsitem.js";
// import Spinner from "./Spinner.js";
// import PropTypes from 'prop-types';
// import InfiniteScroll from "react-infinite-scroll-component";



// export default class News extends Component {

//   static defaultProps = {
//         country: "in",
//         pageSize: 10,
//         category: "general",
//   }

//   static propTypes ={
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string,
//   }

//   constructor() {
//     super();
//     this.state = {
//       Article: [],
//       loading: false,
//       page: 1,
//       totalResults: 0,
//     };
//   }


//   //componentDidMount is a life cycle method which runs after render. it is an asynchrounsied function.
//      // await keyword  can be used in async function to wait for the completion of that particular statement and then proceed further.

//   async updateNews() {
//      this.props.updateProgress(5);
//     const url =
//       `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//       this.setState({loading:true});
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.props.updateProgress(40);
//     console.log(parsedData);
//     this.setState({
//       Article: parsedData.articles,                //here "articles" is the array of news items in the data fetched by an Api.
//       totalResults: parsedData.totalResults,
//       loading: false
//     });
//     this.props.updateProgress(100);

//   }

//  async componentDidMount() {

//     this.updateNews()

//   }

//    fetchMoreData = async() => {

//     const url =
//       `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       page: this.state.page+1 ,
//       Article: this.state.Article.concat(parsedData.articles),               
//       totalResults: parsedData.totalResults,
    
//     });

//   }


//   // handleOnPrev = async () => {

//   //   this.setState({page: this.state.page - 1});
//   //   this.updateNews()

//   // }


//   // handleOnNxt = async () => {

//   // this.setState({page: this.state.page + 1});
//   // this.updateNews()

//   // }


//   render() {
//     return (
//       <>
//         <h1 className="text-center my-4">newsBuzz - Top {this.props.category} Headlines</h1>
//         <hr />
//         {this.state.loading && <Spinner/>}

//         <InfiniteScroll
//           dataLength={this.state.Article.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.Article.length !== this.state.totalResults}
//           loader={<Spinner/>}
//         >
//         <div className="container my-3">
//         <div className="row">
//           {/* {!(this.state.loading) && this.state.Article.map((element) => { */}
//            {this.state.Article.map((element) => {
//             return (
//               <div className="col md-4" key={element.url}>
//                 <Newsitem
//                   title={element.title}
//                   description={element.description}
//                   imageUrl={element.urlToImage}
//                   Url={element.url}
//                   author={element.author}
//                   date={element.publishedAt}
//                   source={element.source.name}
//                 />
//               </div>
//             );
//           })}
//         </div>
//         </div>
//         </InfiniteScroll>

//         {/* <div className="container d-flex justify-content-between">
//           <button
//             className="btn btn-dark"
//             onClick={this.handleOnPrev}
//             disabled={this.state.page <= 1}
//           >
//             &larr; Previous
//           </button>
//           <button className="btn btn-dark" onClick={this.handleOnNxt} disabled={Math.ceil(this.state.totalResults/this.props.pageSize) < this.state.page+1}>
//             Next &rarr;
//           </button>
//         </div> */}
//     </>
//     );
//   }
// }
