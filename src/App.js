import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="app">
    
      <div class="app__body">
        
        {/* Sidebar component */}

        <Sidebar />

        {/* Chat component */}

        <Chat />

      </div>

      

    </div>
  );
}

export default App;
 