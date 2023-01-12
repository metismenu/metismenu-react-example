import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SidebarNav from './pages/SidebarNav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter basename="/metismenu-react-example">
      <div className='app'>
        <aside className='sidebar'>
          <SidebarNav />
        </aside>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
