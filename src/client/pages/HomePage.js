import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        Home updated!
        <button onClick={() => console.log('ssup?')}>Hit me</button>
      </div>
    )
  }
}

export default {
  component: Home
};
