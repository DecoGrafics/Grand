import React, { Component } from 'react';
import Son from './Son';

class Grandfather extends React.Component {
  handleClick(e) {
    e.stopPropagation();
    this.props.onClick();
  }
  handleSonClick(e) {
    e.stopPropagation();
    this.props.onSonClick();
  }
  render() {
    const { counter, sonCounter, grandSonCounter } = this.props;
    const handleClick = (e) => this.handleClick(e);
    return (
      <div className="col-md-12 mt-5" onClick={handleClick}>
        <div className="btn btn-secondary btn-sm">Grandfather son: {counter + sonCounter}</div>
        <div className="row">
        <Son
          counter={counter + sonCounter + grandSonCounter}
          onClick={(e) => this.handleSonClick(e)}
        />
        <Son
          counter={counter + sonCounter + grandSonCounter}
          onClick={(e) => this.handleSonClick(e)}
        />
        <Son
          counter={counter + sonCounter + grandSonCounter}
          onClick={(e) => this.handleSonClick(e)}
        />
        </div>
      </div>
    );
  }
}

export default Grandfather;
