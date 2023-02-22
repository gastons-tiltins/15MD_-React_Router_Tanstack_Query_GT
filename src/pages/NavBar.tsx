import {Outlet, Link} from 'react-router-dom';
import style from './NavBar.module.scss';

const Layout = () => {
    return (
        <>
            <nav>
                <ul className={style.navcont}>
                    <li className={style.navli}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={style.navli}>
                        <Link to='/character'>Characters</Link>
                    </li>
                    <li className={style.navli}>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;
