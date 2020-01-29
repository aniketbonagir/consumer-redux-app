import React from 'react';
import './App.css';
import ConsumerListContainer from "./containers/ConsumerListContainer";

function App() {
  return (
    <div className="App">
      <ConsumerListContainer render = {() => <ConsumerListContainer />} />
    </div>
  );
}

export default App;
