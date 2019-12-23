import React, { Component } from 'react';
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

class App extends Component {
  render(){
  return (
    <div className="App">
      <Counter />
      < Greet name = "Adel" heroName = "Darkonnen" >
      <p> This is children props </p>
      </Greet>
      < Greet name = "Adel" heroName = "Darkonnen" />
      < Welcome name = "Adel" heroName = "Darkonnen"/>
      < Hello />
      < Message />
    </div>
  );
  }
}

export default App;
