import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import './style.css';
// export default App;
export default () => (
  <Tabs>
    <TabList>
      <Tab>Hello React</Tab>
      <Tab>Lorem Ipsum Tab</Tab>
      <Tab>Login Form</Tab>
      <Tab>Fun People</Tab>
    </TabList>
 
    <TabPanel>
      <h2>Hello React</h2>
    </TabPanel>
    <TabPanel>
      <h2>Lorem Ipsum Tab</h2>
    </TabPanel>
    <TabPanel>
      <h2>Login Form</h2>
    </TabPanel>
    <TabPanel>
      <h2>Fun People</h2>
    </TabPanel>
  </Tabs>
);


