import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SidebarNav from './pages/SidebarNav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <BrowserRouter basename="/metismenu-react-example">
      <div className="app">
        <aside className="sidebar">
          <SidebarNav />
        </aside>
        <div className="content">
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Contact} path="/contact" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
