
import React, { Component } from 'react'
import DropZone from "../components/DropZone";

import { fetchVisionApi } from '../redux/actions';

import { connect } from 'react-redux';

class Homepage extends Component {

  getImageDetails = (file) => {
    console.log("data from dropdown", file);
    console.log(this.props.fetchVisionApi(file[0].preview))
  }


  render() {

    return (
      <div>
        {/*  Jumbotron  */}
        <div className="p-5 text-center bg-light">
          <h1 className="mb-3">Drag and Drop</h1>
          <DropZone getImageDetails={this.getImageDetails} />

        </div>
        {/* Jumbotron  */}
      </div>
    )
  }
}


export default connect(null, { fetchVisionApi })(Homepage);
