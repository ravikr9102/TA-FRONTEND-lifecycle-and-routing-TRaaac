import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from './Categories';
import Quiz from './Quiz';

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Categories />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
    </>
  );
}
