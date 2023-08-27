import { Link, Outlet, useNavigate } from 'react-router-dom';
import './styles/Header.css';
import LoginLogoutField from './components/LoginLogoutField';
import { useRef } from 'react';

const Header = () => {
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate('/search/' + searchRef.current.value);
  };

  return (
    <>
      <div className="header">
        <Link to="/" className="header-logo-anchor">
          <img
            src={window.location.origin + '/public/assets/logo.svg'}
            alt="logo"
            className="header-logo"
          />
        </Link>

        <form className="header-form" onSubmit={search}>
          <input type="text" className="header-search-input" ref={searchRef} />
          <input
            type="submit"
            className="header-search-button"
            value={search}
          />
        </form>

        <LoginLogoutField />
      </div>
      <Outlet />
    </>
  );
};

export default Header;
