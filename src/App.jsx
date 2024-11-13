import { useState } from 'react'

// src/App.js
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "George Samuel",
        bio: "Software Developer with 10+ years of experience.",
        imgSrc: "https://www.skillreactor.io/blog/wp-content/uploads/2024/02/image.jpeg",
        profession: "Software Engineer",
      },
      show: false,
      mountedTime: 0,
    };
    this.timer = null;
  }

  // Toggle show state
  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  componentDidMount() {
    // Start the timer to track the interval since the component was mounted
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the timer when the component unmounts
    clearInterval(this.timer);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.Person;
    const { show, mountedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>
        
        {show && (
          <div className="profile">
            <img src={imgSrc} alt="Profile" />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <h4>{profession}</h4>
          </div>
        )}

        <p>Time since component mounted: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App
