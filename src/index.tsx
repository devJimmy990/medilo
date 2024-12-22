import React from 'react';
import App from './app/App';
import './styles/global.css';
import ReactDOM from 'react-dom/client';
import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

const Loader = lazy(() => import("components/Loader"));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </BrowserRouter>
);

