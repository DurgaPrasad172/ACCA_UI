// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import BecomeACCA from './components/BecomeACCA';
import WhyChooseUs from './components/WhyChooseUs';
import WhatWillYouLearn from './components/WhatWill';
import PlacementAssistance from './components/PlacementAssistance';
import IndigoLearn from './components/IndigoLearn';
function App() {
  return (
    <div className="App">
      <Header />
      <BecomeACCA />
      <WhyChooseUs/>
      <WhatWillYouLearn/>
      <PlacementAssistance/>
      <IndigoLearn/>
      {/* Add other components here */}
    </div>
  );
}

export default App;
