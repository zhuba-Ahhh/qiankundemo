import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="router">
        <Router>
          <Link to='/vue'>vue应用</Link>
          <Link to='/react'>react应用</Link>
        </Router>
      </div>
      {/* 切换导航将微应用渲染到container容器中 */}
      <div id='container'></div>
    </div>
  );
}

export default App;
