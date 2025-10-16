import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bot Battle Arena</h1>
      </header>
      <main>
        <BotCollection bots={[]} />
      </main>
    </div>
  );
}

export default App;
   
