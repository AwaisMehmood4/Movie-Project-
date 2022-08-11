import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.component';
import MovieDetails from './components/MovieDetails/MovieDetails.component';
import PageNotFound from './components/PageNotFound/PageNotFound.component';
import './App.scss';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';

function App() {
  return (
    <div className="app">
        <Header />
        <div className='container'>
        <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/movie/:imdbID' element={<MovieDetails />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          </div>
          <Footer />
    </div>
  );
}

export default App; 
