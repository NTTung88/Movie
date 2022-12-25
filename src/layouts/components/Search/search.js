import classNames from 'classnames/bind';
import style from './Search.module.scss';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDebounce } from '~/hooks';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/Icon';
import { Link } from 'react-router-dom';
import Image from '~/components/Images/Image';
import config from '~/config';
const cx = classNames.bind(style);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 800);

    const inputRef = useRef();
    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        fetch(`https://api.tvmaze.com/search/shows?q=${debouncedValue}`)
            .then((res) => res.json())
            .then((movie) => {
                setSearchResult(movie);
                setLoading(false);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    };


    const getImage = (data) => {
        if (data === null) {
            return 'https://gcalls.co/wp-content/themes/applounge/assets/images/no-image/No-Image-Found-400x264.png';
        }
        return data.medium;
    };
    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('wrapper')}>
                            <h4 className={cx('search-title')}>Movies List</h4>
                            {searchResult.map((result, index) => (
                                <div key={index}>
                                    <Link
                                        to={`${config.routes.detailMovie}/${result.show.id}`}
                                        className={cx('wrapperMovie')}
                                    >
                                        <Image
                                            className={cx('avatar')}
                                            src={getImage(result.show.image)}
                                            alt={result.show.name}
                                        />
                                        <div className={cx('info')}>
                                            <h4 className={cx('name')}>
                                                <span>{result.show.name}</span>
                                            </h4>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search  videos "
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon className={cx('searchIcon')} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}
Search.propTypes = {
    // searchResult: PropTypes.object.isRequired,
    debouncedValue: PropTypes.string,
};
export default Search;
