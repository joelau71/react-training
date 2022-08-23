import { useState } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import i18n from './i18n';

function App() {
  // const url = window.location.href.split('/');
  // const navigate = useNavigate();
  // let locale = url[3];
  // const locales = i18n.options.supportedLngs;
  // const fallback = i18n;
  // console.log(i18n);
  // if (!locales.includes(locale)) {
  //   navigate('en', { replace: true });
  // }

  return (
    <div className="App">
      <Routes>
        <Route path=":locale">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
