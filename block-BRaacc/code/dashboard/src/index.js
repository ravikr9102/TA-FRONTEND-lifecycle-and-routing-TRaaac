import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Book from './components/Books';
import People from './components/People';
import Help from './components/Help';
import Articles from './components/Articles';
import Article from './components/Article';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/Help" element={<Help />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/People" element={<People />} />
        <Route path="/" element={<App />} exact />
        <Route path="/articles/:slug" element={<Article />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
