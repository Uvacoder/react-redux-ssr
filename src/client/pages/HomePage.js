import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        Home updated!
        <button className="text-white p-2 rounded bg-blue-600 ml-4" onClick={() => console.log('ssup?')}>Hit me</button>
      </div>
    )
  }
}

export default {
  component: Home
};
