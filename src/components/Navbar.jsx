import { Link } from 'react-router-dom';
import i18n from '../i18n';

export function NavBar() {
  const locale = i18n.language;

  return (
    <div className="container px-8 py-2 mx-auto flex justify-between items-center">
      <div>
        <img src="./public/vite.svg" />
      </div>
      <div class="flex gap-x-4">
        <Link to={`${locale}/`}>Home</Link>
        <Link to={`${locale}/about`}>About</Link>
        <Link to={`${locale}/contact`}>Contact</Link>
        <div>
          <div className="material-icons">language</div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
