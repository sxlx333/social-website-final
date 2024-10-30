import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';
import { MenuLink } from './MenuLink';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export function Header() {
    const { isLoggedIn, role, logout } = useContext(UserContext);

    function handleLogoutClick() {
        fetch('http://localhost:5114/api/logout', {
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    logout();
                }
            })
            .catch(console.error);
    }

    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-2 mb-2 mb-md-0">
                    <Link to='/' className="d-inline-flex link-body-emphasis text-decoration-none">
                        <img src={logo} alt="Logo" />
                    </Link>
                    {isLoggedIn && role === 'user' && 'USER'}
                    {isLoggedIn && role === 'admin' && 'ADMIN'}
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <MenuLink href='/' title='Pagrindinis' />
                    <MenuLink href='/faq' title='DUK' />
                    <MenuLink href='/about-us' title='Apie mus' />
                    <MenuLink href='/feed' title='FEED' />
                </ul>

                {isLoggedIn && <div className="col-md-4 text-end">
                    <Link to='/profile' className="btn btn-outline-primary me-2">Profilis</Link>
                    <button onClick={handleLogoutClick} type='button' className="btn btn-primary">Atsijungti</button>
                </div>}

                {!isLoggedIn && <div className="col-md-4 text-end">
                    <Link to='/login' className="btn btn-outline-primary me-2">Prisijungti</Link>
                    <Link to='/register' className="btn btn-primary">Registruotis</Link>
                </div>}
            </header>
        </div>
    )
}