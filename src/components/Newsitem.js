import React from 'react'

export default function Newsitem(props) {

  let { title, description, imageUrl, Url, author, date, source } = props ;

  return (
    <div className="container my-3" style={{position:"relative"}}>
         <h6> <span className="badge bg-warning" style={{position:"absolute", zIndex:"1"}} >{source}</span></h6>
        <div className="card" style={{ width: "18rem"}} >
       
          <img src={!imageUrl?"https://static.india.com/wp-content/uploads/2023/01/Pakistan-vs-New-Zealand-2nd-Test.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text" style={{color:"red"}} ><small> By: {!author? "anonymous":author} on: {new Date(date).toGMTString()}</small> </p>
            <a href={Url} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">
              Read full article...
            </a>
          </div>
        </div>
      </div>
  )
}



   /* whole code in class based components */

// import React, { Component } from "react";

// export default class Newsitem extends Component {

//   render() {

//     let { title, description, imageUrl, Url, author, date, source } = this.props;

//     return (
//       <div className="container my-3" style={{position:"relative"}}>
//          <h6> <span className="badge bg-warning" style={{position:"absolute", zIndex:"1"}} >{source}</span></h6>
//         <div className="card" style={{ width: "18rem"}} >
       
//           <img src={!imageUrl?"https://static.india.com/wp-content/uploads/2023/01/Pakistan-vs-New-Zealand-2nd-Test.jpg":imageUrl} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{title}</h5>
//             <p className="card-text">{description}</p>
//             <p className="card-text" style={{color:"red"}} ><small> By: {!author? "anonymous":author} on: {new Date(date).toGMTString()}</small> </p>
//             <a href={Url} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">
//               Read full article...
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
