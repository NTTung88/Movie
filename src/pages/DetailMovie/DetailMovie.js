import classNames from 'classnames/bind';
import style from './DetailMovie.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(style);

function DetailMovie() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('section1')}>
                <p className={cx('title')}>
                    Avengers: Endgame and the most beautiful greeting for the magnificent epic
                </p>
                <div className={cx('sectionLeft')}>
                    <img
                        className={cx('img')}
                        src="https://revelogue.com/wp-content/uploads/2020/01/Poster-chinh-thuc-cho-Endgame-e1578281933829.jpg"
                        alt="aveee"
                    />
                </div>
                <div className={cx('sectionRight')}>
                    <p className={cx('titleContent')}>Category:</p>
                    <p className={cx('titleContent')}>Status:</p>
                    <p className={cx('titleContent')}>Point:</p>
                    <p className={cx('titleContent')}>Reissue:</p>
                    <p className={cx('titleContent')}>Time:</p>
                </div>
                <div className={cx('sectionBottom')}>
                    <p className={cx('content')}>
                        Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team
                        the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures,
                        it is the direct sequel to Avengers: Infinity War (2018) and the 22nd film in the Marvel
                        Cinematic Universe (MCU). Directed by Anthony and Joe Russo and written by Christopher Markus
                        and Stephen McFeely, the film features an ensemble cast including Robert Downey Jr., Chris
                        Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Paul Rudd,
                        Brie Larson, Karen Gillan, Danai Gurira, Benedict Wong, Jon Favreau, Bradley Cooper, Gwyneth
                        Paltrow, and Josh Brolin. In the film, the surviving members of the Avengers and their allies
                        attempt to reverse the destruction caused by Thanos in Infinity War.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DetailMovie;
