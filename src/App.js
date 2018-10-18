import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const dhadiSvgCord = { height: 800, width: 800, offset: 55, min: 55, max: 600, radius: 50}
    const dyeColor = {default: 'white', selected: 'red'}
    return (
      <div className="App">
        <header className="App-header">
    <h1>Dhadi Game</h1>
        </header>
        <svg height={dhadiSvgCord.height} width={dhadiSvgCord.width}>
  <line x1={dhadiSvgCord.min} y1={dhadiSvgCord.min}  x2={dhadiSvgCord.max}  y2={dhadiSvgCord.max} style={{stroke:'#FF0000',strokeWidth:2}}/>
  <line x1={dhadiSvgCord.min}  y1={dhadiSvgCord.max}  x2={dhadiSvgCord.max}  y2={dhadiSvgCord.min} style={{stroke:'#FF0000',strokeWidth:2}}/>
  <line x1={dhadiSvgCord.min}  y1={dhadiSvgCord.min}  x2={dhadiSvgCord.min}  y2={dhadiSvgCord.max} style={{stroke:'#FF0000',strokeWidth:2}}/>
   <line x1={dhadiSvgCord.max}  y1={dhadiSvgCord.min}  x2={dhadiSvgCord.max}  y2={dhadiSvgCord.max} style={{stroke:'#FF0000',strokeWidth:2}}/>
   <line x1={dhadiSvgCord.min}  y1={dhadiSvgCord.min}  x2={dhadiSvgCord.max}  y2={dhadiSvgCord.min} style={{stroke:'#FF0000',strokeWidth:2}}/>
   <line x1={dhadiSvgCord.min}  y1={dhadiSvgCord.max}  x2={dhadiSvgCord.max}  y2={dhadiSvgCord.max} style={{stroke:'#FF0000',strokeWidth:2}}/>
   <line x1={dhadiSvgCord.max}  y1={dhadiSvgCord.min}  x2={dhadiSvgCord.max}  y2={dhadiSvgCord.max} style={{stroke:'#FF0000',strokeWidth:2}}/>
  
   <line x1={(dhadiSvgCord.offset+dhadiSvgCord.max)/2}  y1={dhadiSvgCord.min} 
    x2={(dhadiSvgCord.offset+dhadiSvgCord.max)/2}  y2={dhadiSvgCord.max} style={{stroke:'#FF0000',strokeWidth:2}}/>
   
   <line x1={dhadiSvgCord.min}  y1={(dhadiSvgCord.offset+dhadiSvgCord.max)/2} 
     y2={(dhadiSvgCord.offset+dhadiSvgCord.max)/2}  x2={dhadiSvgCord.max} style={{stroke:'#FF0000',strokeWidth:2}}/>
       <g stroke="black" strokeWidth="1" fill="white">
        <circle id="pointA" className="defaultuser" fill={dyeColor.default} draggable="true"  cx={dhadiSvgCord.min} cy={dhadiSvgCord.min} r={dhadiSvgCord.radius} />
        <circle id="pointA"  fill={dyeColor.default}  draggable="true" cx={dhadiSvgCord.min} cy={(dhadiSvgCord.offset+dhadiSvgCord.max)/2} r={dhadiSvgCord.radius} />
        <circle id="pointA" fill={dyeColor.default} draggable="true" cx={dhadiSvgCord.min} cy={dhadiSvgCord.max} r={dhadiSvgCord.radius} />

        <circle id="pointA" fill={dyeColor.default}  draggable="true" cx={(dhadiSvgCord.offset+dhadiSvgCord.max)/2} cy={dhadiSvgCord.min} r={dhadiSvgCord.radius} />
        <circle id="pointA"  fill={dyeColor.default} draggable="true" cx={(dhadiSvgCord.offset+dhadiSvgCord.max)/2} 
        cy={(dhadiSvgCord.offset+dhadiSvgCord.max)/2} r={dhadiSvgCord.radius} />
        <circle id="pointA" fill={dyeColor.default} draggable="true" cx={(dhadiSvgCord.offset+dhadiSvgCord.max)/2} cy={dhadiSvgCord.max} r={dhadiSvgCord.radius} />

        <circle id="pointA" fill={dyeColor.default} draggable="true" cx={dhadiSvgCord.max} cy={dhadiSvgCord.min} r={dhadiSvgCord.radius} />
        <circle id="pointA" fill={dyeColor.default} draggable="true" cx={dhadiSvgCord.max} cy={(dhadiSvgCord.offset+dhadiSvgCord.max)/2} r={dhadiSvgCord.radius} />
        <circle id="pointA" fill={dyeColor.default} draggable="true"  cx={dhadiSvgCord.max} cy={dhadiSvgCord.max} r={dhadiSvgCord.radius} />

       </g>
  Sorry, your browser does not support inline SVG.
</svg>
      </div>
    );
  }
}

export default App;
