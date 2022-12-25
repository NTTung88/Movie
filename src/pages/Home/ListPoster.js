/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import style from './Home.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(style);
function ListPoster({ data }) {
    const listShow = [];

    const getElement = () => {
        data.forEach((item, index) => {
            listShow.push(
                <div key={index}>
                    <div className={cx('poster')}>
                        <Link to={`${config.routes.detailMovie}/${item.id}`} id={item.id} className={cx('Nav')}>
                            <div className={cx('posterContent')}>
                                <img className={cx('bgItem')} src={getImage(item.image)} alt={item.name} />

                                <p className={cx('percent')}> {getRating(item.rating)}</p>
                                <p className={cx('namePoster')}>{item.name}</p>
                            </div>
                        </Link>
                    </div>
                </div>,
            );
        });

        return listShow;
    };

    const getImage = (arr = []) => {
        if (arr === undefined) {
            return undefined;
        }
        if (arr === null) {
            return null;
        }

        return arr.medium;
    };

    const getRating = (arr = []) => {
        if (arr === undefined) {
            return undefined;
        }
        if (arr.average === null) {
            return 'NaN';
        }
        return arr.average;
    };

    return (
        <div className={cx('section3')}>
            <div className={cx('grilPoster')}>{getElement()}</div>
        </div>
    );
}

ListPoster.prototypes = {
    data: PropTypes.object.isRequired,
};
export default ListPoster;
