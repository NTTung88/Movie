/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import style from './Home.module.scss';

const cx = classNames.bind(style);
function ListPoster({ data }) {
    const list = [];
    data.map((m) => {
        list.push(m.show);
    });

    const listShow = [];

    const getElement = () => {
        list.forEach((item, index) => {
            listShow.push(
                <div key={index}>
                    <div className={cx('poster')}>
                        <img className={cx('bgItem')} src={getImage(item.image)} alt={item.name} />

                        <p className={cx('percent')}> {item.id}</p>
                        <p className={cx('namePoster')}>{item.name}</p>
                    </div>
                </div>,
            );
        });

        return listShow;
    };

    const getImage = (arr = []) => {
        if (arr === undefined) {
            return undefined;
        } // return undefined for undefined
        if (arr === null) {
            return null;
        } // null unchanged
        console.log(arr.medium);

        return arr.medium;
    };

    return <div className={cx('section3')}>{getElement()}</div>;
}

ListPoster.prototypes = {
    data: PropTypes.object.isRequired,
};
export default ListPoster;
