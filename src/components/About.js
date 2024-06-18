import React from "react";

export default function About(props) {
  let myStyle = {
    fontFamily: "'Exo 2', sans-serif"
  }

  let myStyle2 = {
    fontFamily: "'Glass Antiqua', cursive"
  }

  return (
  <div className="container my-3" style={{padding: "70px"}}>
    <h1 style={myStyle2} className="my-3">About Us...</h1>
    <h4 style={myStyle}>Founder </h4>
    <h5 style={myStyle}>Honey Patkar, Front-End Developer</h5> 
    <p style={myStyle}>I'm Honey Patkar learning Front-End developing this is my second website that i made using React Js. First website I mentioned below.</p>
    <br/>
    <h1 style={myStyle2} className="my-3">More Info..</h1>  
    <h5 style={myStyle}>You can find more information about me on my personal Portfolio and in my Resume I mention them below..</h5>
    <h5 style={myStyle}><a href="https://portfolio.honeypatkar.repl.co/" target="_blank" rel="noreferrer">Personal Portfolio</a></h5>
    <h5 style={myStyle}><a href="https://resume.honeypatkar.repl.co/" target="_blank" rel="noreferrer">Resume</a></h5>
    <br/>
    <h2 style={myStyle2} className="my-3">My Webiste That i make using React js.</h2>
    <h5 style={myStyle}><a href="https://textchange.honeypatkar.repl.co/" target="_blank" rel="noreferrer">TextChange</a></h5>
</div>

  );
}
