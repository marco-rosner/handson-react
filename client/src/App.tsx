import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomeView, ListView, AboutView, FormView } from './views';
import './i18n';
import './App.css';

export const App = () => (
  <div className="App">
    <body className="App-body">
      <Routes>
        <Route path="/" element={<HomeView />}>
          <Route index element={<FormView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/list" element={<ListView />} />
        </Route>
      </Routes>
    </body>
  </div>
)
