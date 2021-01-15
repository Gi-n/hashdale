
import React, { Component } from 'react'
import DropZone from "../components/DropZone";

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  getImageDetails = (file) => { 
    console.log("data from dropdown", file);
  }   
  
  render() {

    return (
      <div>
        {/*  Jumbotron  */}
        <div className="p-5 text-center bg-light">
          <h1 className="mb-3">Drag and Drop</h1>
          <DropZone getImageDetails={this.getImageDetails}/>
          
        </div>
        {/* Jumbotron  */}
      </div>
    )
  }
}


export default Homepage;
