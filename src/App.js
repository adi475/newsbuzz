import './App.css';
import Navbar from './components/Navbar.js'
import News from './components/News.js'
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import React, { Component } from 'react'

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API;

   state = {
    progress: 0
   }

   setProgress = (progress) => {
      this.setState({progress : progress})
   }

  render() {
    return (
      <>
      <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
       color='#f11946'
       style={{height:"4px"}}
       progress={this.state.progress}
     />
        <Routes>
        <Route path="/" element={<News updateProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={10} country= "in" category= "general" />}/>
        <Route path="/Health" element={<News updateProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={10} country= "in" category= "health" />}/>
        <Route path="/Business" element={<News updateProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={10} country= "in" category= "business" />}/>
        <Route path="/Technology" element={<News  updateProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={10} country= "in" category= "technology" />}/>
        <Route path="/Sports" element={<News updateProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={10} country= "in" category= "sports" />}/>
        <Route path="/Entertainment" element={<News updateProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={10} country= "in" category= "entertainment" />}/>
        </Routes>
        </BrowserRouter>
        
      </div>
      
     </>
    )
  }
}
