import './App.css';
import React from 'react';

import {Header, 
  TodoApp,
  Footer,

} from './Components';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoApp />
      <Footer />
    </div>
  );
}

export default App;
