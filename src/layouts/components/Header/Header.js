import classNames from 'classnames/bind';
import style from './Header.module.scss';
import config from '~/config';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import Images from '~/components/Images';
import Search from '../Search';

const cx = classNames.bind(style);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <Link to={config.routes.home}>
                <Images className={cx('logo')} src={images.logo} alt="logo" />
            </Link>
            <p className={cx('title')}>Movies</p>

            <Search />
            <div className={cx('icGroup')}>
                <Link to={config.routes.movie}>
                    <Images className={cx('icMovie')} src={images.icMovie} alt="movie" />
                </Link>

                <Link to={config.routes.movie}>
                    <Images className={cx('icHistory')} src={images.icHistory} alt="history" />
                </Link>

                <Link to={config.routes.movie}>
                    <Images className={cx('icYears')} src={images.icDate} alt="date" />
                </Link>

                <Link to={config.routes.movie}>
                    <Images className={cx('icCountry')} src={images.icCountry} alt="country" />
                </Link>
            </div>

            <div className={cx('account')}></div>
        </div>
    );
}

export default Header;
