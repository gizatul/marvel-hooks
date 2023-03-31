import './singleComicPage.scss';
import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import { useParams, Link } from 'react-router-dom';

const SingleComicPage = () => {
    const {comicId} = useParams(); 
    const [comic, setComic] = useState(null);
    const {loading, error, getComic, clearError} = useMarvelService();

    useEffect(() => {
        updateComic() // eslint-disable-next-line
    }, [comicId]);

    const onComicLoaded = (comic) => {
        setComic(comic);
    }

    const updateComic = () => {

        clearError();
        getComic(comicId)
            .then(onComicLoaded)
    }

    const errorMessage = error ? <ErrorMessage/> : null; 
    const spinner = loading ? <Spinner/> : null; 
    const content = !(loading || error || !comic) ? <View comic={comic}/> : null;

    return (
        <div className="single-comic">
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

const View = ({comic}) => {
    const {title, description, pages, lang, price, thumbnail} = comic;

    return (
        <>
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pages}</p>
                <p className="single-comic__descr">Language: {lang}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <Link to={'/comics'} className="single-comic__back">Back to all</Link>
        </>
    )

}

export default SingleComicPage;