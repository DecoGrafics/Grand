import React, { Component } from 'react';

class Son extends React.Component {
    render() {
      const counter = this.props.counter;
      return (
        <div className="col-md-4 mt-5 " onClick={(e) => this.props.onClick(e)}>
            <span className="btn btn-primary btn-sm">
                Grandson: {counter}
            </span>
        </div>
      );
    }
  }
  
  export default Son;