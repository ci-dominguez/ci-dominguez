import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import ObserverProvider from './providers/observer-provider';
import Landing from './routes/landing';
import About from './routes/about';
import Error from './routes/error';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ObserverProvider>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </ObserverProvider>
    </BrowserRouter>
  </StrictMode>
);
