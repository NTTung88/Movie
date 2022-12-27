import classNames from 'classnames/bind';
import style from './DetailMovie.module.scss';
import { useParams } from 'react-router-dom';

// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const cx = classNames.bind(style);

function DetailMovie() {
    const [movie, setMovie] = useState(null);

    const param = useParams();

    const idUrl = param.id;
    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${idUrl}`, { method: 'GET' })
            .then((res) => res.json())
            .then((movie) => {
                setMovie(movie);
            });
    }, [idUrl]);

    return (
        <div className={cx('bodyDetail')}>
            {movie ? (
                <div className={cx('wrapper')}>
                    <div className={cx('section1')}>
                        <p className={cx('title')}>{movie.name}</p>
                        <div className={cx('sectionLeft')}>
                            <img className={cx('img')} src={movie.image.medium} alt={movie.name} />
                        </div>
                        <div className={cx('sectionRight')}>
                            <p className={cx('titleContent')}>Category:{movie.type}</p>
                            <p className={cx('titleContent')}>Status:{movie.status}</p>
                            <p className={cx('titleContent')}>Point:{movie.rating.average}</p>
                            <p className={cx('titleContent')}>Reissue:{movie.premiered}</p>
                            <p className={cx('titleContent')}>Time:{movie.averageRuntime}</p>
                            <button className={cx('btnSR')}>Watching</button>
                            <button className={cx('btnSR')}>Following</button>
                        </div>
                        <div className={cx('sectionMidle')}>
                            <p className={cx('content')}>{movie.summary}</p>
                        </div>

                        <div className={cx('sectionBottom')}>
                            <p className={cx('titleComment')}>Comment (1000)</p>
                            <div className={cx('contentComment')}>
                                <img
                                    className={cx('avatar')}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShoFqZAQmdEqxqn9LxC8W2YG-RXszdpQud5g&usqp=CAU"
                                    alt="chicken"
                                />
                                <p className={cx('nickName')}>Tùng Nguyễn</p>
                                <p className={cx('cmtLine')}>Phim này rất hay.</p>
                                <p className={cx('timeLine')}>1 phút trước.</p>
                            </div>
                            <div className={cx('contentComment')}>
                                <img
                                    className={cx('avatar')}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShoFqZAQmdEqxqn9LxC8W2YG-RXszdpQud5g&usqp=CAU"
                                    alt="chicken"
                                />
                                <p className={cx('nickName')}>Tùng Nguyễn</p>
                                <p className={cx('cmtLine')}>Phim này rất hay.</p>
                                <p className={cx('timeLine')}>1 phút trước.</p>
                            </div>
                            <div className={cx('contentComment')}>
                                <img
                                    className={cx('avatar')}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShoFqZAQmdEqxqn9LxC8W2YG-RXszdpQud5g&usqp=CAU"
                                    alt="chicken"
                                />
                                <p className={cx('nickName')}>Tùng Nguyễn</p>
                                <p className={cx('cmtLine')}>Phim này rất hay.</p>
                                <p className={cx('timeLine')}>1 phút trước.</p>
                            </div>
                            <div className={cx('contentComment')}>
                                <img
                                    className={cx('avatar')}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShoFqZAQmdEqxqn9LxC8W2YG-RXszdpQud5g&usqp=CAU"
                                    alt="chicken"
                                />
                                <p className={cx('nickName')}>Tùng Nguyễn</p>
                                <p className={cx('cmtLine')}>Phim này rất hay.</p>
                                <p className={cx('timeLine')}>1 phút trước.</p>
                            </div>
                            <div className={cx('contentComment')}>
                                <img
                                    className={cx('avatar')}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShoFqZAQmdEqxqn9LxC8W2YG-RXszdpQud5g&usqp=CAU"
                                    alt="chicken"
                                />
                                <p className={cx('nickName')}>Tùng Nguyễn</p>
                                <p className={cx('cmtLine')}>Phim này rất hay.</p>
                                <p className={cx('timeLine')}>1 phút trước.</p>
                            </div>
                            <div className={cx('contentComment')}>
                                <img
                                    className={cx('avatar')}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShoFqZAQmdEqxqn9LxC8W2YG-RXszdpQud5g&usqp=CAU"
                                    alt="chicken"
                                />
                                <p className={cx('nickName')}>Tùng Nguyễn</p>
                                <p className={cx('cmtLine')}>Phim này rất hay.</p>
                                <p className={cx('timeLine')}>1 phút trước.</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default DetailMovie;
