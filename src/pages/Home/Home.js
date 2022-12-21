/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// import axios from 'axios';
import ListPoster from './ListPoster';

const cx = classNames.bind(style);

function Home() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        fetch('http://api.tvmaze.com/search/shows?q=simpsons')
            .then((res) => res.json())
            .then((movie) => {
                setMovie(movie);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('section1')}>
                <p className={cx('titleContent')}>Welcome to Watch-lists</p>
                <p className={cx('Content')}>Browse movies,add them to watch-lists and share them with friends.</p>
                <p className={cx('Content')}>
                    Just click the *** to add a movie,the poster to see more details or *** to mark the movie as
                    watched.
                </p>
            </div>
            <div className={cx('section2')}>
                <p className={cx('title')}>Popular movies right now</p>
            </div>

            <ListPoster data={movie} />
        </div>
    );
}
Home.prototypes = {
    data: PropTypes.object.isRequired,
};
export default Home;
