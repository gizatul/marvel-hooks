import React, {useState, useEffect, useRef} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import useMarvelService from '../../services/MarvelService';
import PropTypes from 'prop-types';
import './charList.scss';

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

const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(1247);
    const [charEnded, setCharEnded] = useState(false);
    
    const {getAllCharacters, process, setProcess} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true); //Ф-я может быть ниже, тк d Реакте ф-я useEffect запускается после рендеринга 
    }, []) //при пустом массиве ф-я выполнится только 1 раз при создании компонента (имитация componentDidMount)

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded)
            .then(() => setProcess('confirmed'))
    }

    const  onCharListLoaded = (newCharList) => { 

        let ended = false; 
        if (newCharList.length < 9) { 
            ended = true;
        }
        setCharList(charList => [...charList, ...newCharList]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);
    }

    const itemRefs = useRef([]); //useRef можно использовать только верхнеуровне (нельзя помещать в циклы, ф-ции) 

    const focusOnItem = (id) => { 
        itemRefs.current.forEach(item => { // при функциональном подходе нужно добавлять current
            item.classList.remove('char__item_selected')
        });
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus(); 
    }

    function renderItems(arr) {
        const items =  arr.map((item, i) => {
            let objectFit;
            item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? objectFit = 'unset' : objectFit = 'cover';

            return (
                    <CSSTransition key={item.id} timeout={500} classNames='char__item' >
                        <li 
                            tabIndex='0'
                            className="char__item"
                            ref={el => itemRefs.current[i] = el} 
                            onClick={() => {
                                props.onCharSelected(item.id); 
                                focusOnItem(i); 
                            }}
                            onKeyPress={(e) => {
                                if (e.key === ' ' || e.key === "Enter") {
                                    props.onCharSelected(item.id);
                                    focusOnItem(i); 
                                }
                            }}>
                                <img src={item.thumbnail} alt={item.name} style={{objectFit: objectFit}}/>
                                <div className="char__name">{item.name}</div>
                        </li>
                    </CSSTransition>
            )
        });
        
        return (
            <ul className="char__grid">
                <TransitionGroup component={null}>
                    {items}
                </TransitionGroup>
            </ul>
        )
    }

    return (
        <div className="char__list">
            {setContent(process, () => renderItems(charList), newItemLoading)}
            <button className="button button__main button__long"
                    disabled={newItemLoading}
                    onClick={() => onRequest(offset)}
                    style={{'display': charEnded ? 'none' : 'block'}}>
                <div className="inner">
                    load more
                </div>
            </button>
        </div>
    )
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired,
}

export default CharList;