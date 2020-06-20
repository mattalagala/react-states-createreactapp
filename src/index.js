
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tabs from './Tabs';


ReactDOM.render(<Tabs />, document.getElementById('root'));

document.getElementById("submitBtn").addEventListener("click", function(event){
    event.preventDefault()})

// function CupOfCoffee () {
//   return (
//     <div>grande latte with soy milk</div>
//   )
// }

// ReactDOM.render(<CupOfCoffee />, document.getElementById('root'));