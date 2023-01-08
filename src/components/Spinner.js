import React, { Component } from 'react'
import giphy from './giphy.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-4' >
        <img style={{width:"150px"}} src={giphy} alt="" />
      </div>
    )
  }
}
