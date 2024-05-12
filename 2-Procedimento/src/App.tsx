import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import './App.css';
import LivroLista from './LivroLista.js';
import LivroDados from './LivroDados';




function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="navbar navbar-expand navbar-dark bg-dark" data-bs-theme="dark">
          <div className='navbar-collapse'>
            <ul className='navbar-nav'>
              <li className='navbar-item'>
                <Link to={'/'} className='nav-link'> Catálogo </Link>
              </li>
              <li className='navbar-item'>
                <Link to={'/dados'} className='nav-link'> Novo </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className='container'>
        <Routes>
          <Route path='/'>
            <Route index element={<LivroLista />}></Route>
            <Route path='dados' element={<LivroDados />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App;
