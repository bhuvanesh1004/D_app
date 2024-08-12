import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Inbox from './components/Inbox';
import Chat from './components/Chat';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Inbox />
      <Chat />
    </div>
  );
}

export default App;
