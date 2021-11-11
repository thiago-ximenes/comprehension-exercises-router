import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
        </nav>
        <h2>Home</h2>
        <p> My awesome Home component </p>
      </div>
    );
  }
}

export default Home;
