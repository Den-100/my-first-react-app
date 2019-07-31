import React from 'react';
import './App.css';
import MyComponents from './components/MyComponents';
import MyDataComponent from './components/MyDataComponent';

function App() {
  return (
    <div className = "App">
      <MyComponents name = "deniz cayli">this is my children</MyComponents>
      <MyComponents name = "hasan">this is my children</MyComponents>
      <MyDataComponent></MyDataComponent>
    </div>
  );
}

export default App;
