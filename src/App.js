import React from 'react';
import './App.css';
import MyComponents from './components/MyComponents';

function App() {
  return (
    <div className = "App">
      <MyComponents name = "deniz cayli">this is my children</MyComponents>
      <MyComponents name = "hasan">this is my children</MyComponents>
    </div>
  );
}

export default App;
