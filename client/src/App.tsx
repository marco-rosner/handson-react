import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './i18n';
import './App.css';
import { HomeView, ListView, AboutView } from './views';

export const App = () => (
  <div className="App">
    <body className="App-body">
      <Routes>
        <Route path="/" element={<HomeView />}>
          <Route path="/about" element={<AboutView />} />
          <Route path="/list" element={<ListView />} />
        </Route>
      </Routes>
    </body>
  </div>
)
