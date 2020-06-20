import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import FirstTab from './FirstTab';
import SecondTab from './SecondTab';

import ThirdTab from './ThirdTab';
import FourthTab from './FourthTab';

import './style.css'

// export default App;

function Tab () {

  return (
      <div class='container'>  
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Hello React</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Lorem Ipsum</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Login Form</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Fun People</a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><FirstTab /></div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><SecondTab /></div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><ThirdTab /></div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><FourthTab /></div>
      </div>
    </div>)
}


function App () {
    return (
        <Tab />
    )
}
export default App;
