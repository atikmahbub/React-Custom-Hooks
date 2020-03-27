import React from 'react';
import './App.css';
import DocumentTitleOne from './DocumentTitleOne'
import DocumentTitleTwo from './DocumentTitleTwo'
import CounterOne from './CounterOne'
import CounterTwo from './CounterTwo'
import UserForm from './UserForm'

function App() {
  return (
    <div className="App">
      <DocumentTitleOne/>
      <DocumentTitleTwo/>
      <CounterOne/>
      <CounterTwo/>
      <br/><br/>
      <UserForm/>
    </div>
  );
}

export default App;
