import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Car Parts 
      </header>
        <CarPartsList>
          <CParts>keys</CParts>
          <CParts>engine</CParts>
          <CParts>headlights</CParts>
          <CParts>rearlights</CParts>
          <CParts>wheels</CParts>
          <CParts>gas</CParts>
        </CarPartsList>
    </div>
  );
}

function CarPartsList(props){
  return <ul>{props.children}</ul>
}
function CParts(props){
  return <li>{props.children}</li>
}

export default App;
