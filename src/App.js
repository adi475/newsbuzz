import './App.css';
import Navbar from './components/Navbar.js'
import News from './components/News.js'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<News key="general" pageSize={10} country= "in" category= "general" />}/>
        <Route path="/HOME" element={<News key="general" pageSize={10} country= "in" category= "general" />}/>
        <Route path="/Health" element={<News key="health" pageSize={10} country= "in" category= "health" />}/>
        <Route path="/Business" element={<News key="business" pageSize={10} country= "in" category= "business" />}/>
        <Route path="/Technology" element={<News key="technology" pageSize={10} country= "in" category= "technology" />}/>
        <Route path="/Sports" element={<News key="sports" pageSize={10} country= "in" category= "sports" />}/>
        <Route path="/Entertainment" element={<News key="entertainment" pageSize={10} country= "in" category= "entertainment" />}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
