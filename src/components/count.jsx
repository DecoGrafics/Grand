import React, { Component } from 'react';
import Grandfather from './GrandFather';

class Count extends React.Component {
    state = { counter: 0, sonCounter: 0, grandSonCounter: 0, grandSonCounter: 0 };
    fatherClick() {
      this.setState({ sonCounter: this.state.sonCounter + 1 });
    }
    sonClick() {
      this.setState({ grandSonCounter: this.state.grandSonCounter + 1 });
    }
    render() {
      const { counter, sonCounter, grandSonCounter } = this.state;
      return (
          <div className="container text-center">
            <div className="row" onClick={() => this.setState({ counter: counter + 1 })}>
                <div className="col-md-12 mt-5 btn btn-primary btn-sm">
                    Grandfather: {counter}
                </div>

                <div className="col-md-6">
                    <Grandfather
                        counter={counter}
                        grandSonCounter={grandSonCounter}
                        sonCounter={sonCounter}
                        key={1}
                        onClick={() => this.fatherClick()}
                        onSonClick={() => this.sonClick()}
                    />
                </div>

                <div className="col-md-6 ">
                    <Grandfather
                        counter={counter}
                        grandSonCounter={grandSonCounter}
                        sonCounter={sonCounter}
                        key={1}
                        onClick={() => this.fatherClick()}
                        onSonClick={() => this.sonClick()}
                    />
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Count;
  