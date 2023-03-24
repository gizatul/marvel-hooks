import { useState, useEffect } from 'react';
import './comicsList.scss';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import { Link } from 'react-router-dom';

const ComicsList = () => {

    const [comicList, setComicList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [comicListEnded, setComicListEnded] = useState(false);


    const {loading, error, getAllComics} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true); // eslint-disable-next-line 
    }, []);

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicListLoaded)
    }

    const onComicListLoaded = (newComicList) => {
        let ended = false;
        if (newComicList.length < 8) {
            ended = true;
        }
        setComicList(comicList => [...comicList, ...newComicList]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 8);
        setComicListEnded(ended);
    }

    const renderItems = (arr) => {
        const items = arr.map((item, i) => {
            
            return (
                <li className="comics__item"
                key = {i}>
                <Link to={`/comics/${item.id}`}>
                    <img src={item.thumbnail} 
                         alt={item.title} 
                         className="comics__item-img"/>
                    <div className="comics__item-name">{item.title}</div>
                    <div className="comics__item-price">{item.price}</div>
                </Link>
            </li>
            )
        });
        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }
    
    const items = renderItems(comicList);
    const spinner = loading && !newItemLoading  ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;

    return (

        <div className="comics__list">
            {items}
            {spinner}
            {errorMessage}
            <button className="button button__main button__long"
                    onClick={() => onRequest(offset)}
                    disabled={newItemLoading}
                    style={{'display' : comicListEnded ? 'none' : 'block'}}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;