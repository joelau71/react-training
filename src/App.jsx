import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import i18n from './i18n';
import config from './config';
import Post from './pages/Post';

function App() {
  const localation = useLocation();
  const url = localation.pathname.split('/');
  const locale = url[1];
  const locales = i18n.options.supportedLngs;
  const { FALLBACK_LOCALE } = config;

  if (!locales.includes(locale)) {
    window.location.href = '/' + FALLBACK_LOCALE;
    return false;
  }

  i18n.changeLanguage(locale);

  return (
    <div className="App">
      <Routes>
        <Route path=":locale">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="post" element={<Post />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
