import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthForm from 'components/AuthForm';

import style from './Header.module.css';

export default function Header() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <header className={style.header}>
            <div className={style.nav}>
                <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthForm />}
            </div>
        </header>
    );
}
