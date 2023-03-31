import { useState, useEffect } from 'react';
import './comicsList.scss';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import { Link } from 'react-router-dom';

const setContent = (process, Component, newItemLoading) => {
    switch (process) {
        case 'waiting':
            return <Spinner/>;
        case 'loading':
            return newItemLoading ? <Component/> : <Spinner/>;
        case 'confirmed':
            return <Component/>;
        case 'error':
            return <ErrorMessage/>;
        default:
            return new Error('Unexpected process state');
    }
}

const ComicsList = () => {

    const [comicList, setComicList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [comicListEnded, setComicListEnded] = useState(false);


    const {getAllComics, process, setProcess} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true); // eslint-disable-next-line 
    }, []);

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicListLoaded)
            .then(() => setProcess('confirmed'))
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

    return (

        <div className="comics__list">
            {setContent(process, () => renderItems(comicList), newItemLoading)}
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