import { useState, useEffect } from 'react';
import './charInfo.scss';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import Skeleton from '../skeleton/Skeleton';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharInfo = (props) => {

    const [char, setChar] = useState(null);

    const {loading, error, getCharacter, clearError} = useMarvelService();

    useEffect(() => {
        updateChar() // eslint-disable-next-line
    }, [props.charId]);



    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        const {charId} = props;

        if(!charId){
            return;
        }
        clearError();
        getCharacter(charId)
            .then(onCharLoaded)
    }
        
    const skeleton = char || loading || error ? null : <Skeleton/>;
    const errorMessage = error ? <ErrorMessage/> : null; 
    const spinner = loading ? <Spinner/> : null; 
    const content = !(loading || error || !char) ? <Info char={char}/> : null;
        
        return (
            <div className="char__info">
                {errorMessage}
                {spinner}
                {skeleton}
                {content}
            </div>
        )
}

const Info = ({char}) => {
    const {thumbnail, name, description, wiki, homepage, comics} = char;
    let objectFit;
    thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? objectFit = 'contain' : objectFit = 'unset';
    
    return(
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={{objectFit: objectFit}}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : 'Not found'}
                {comics.slice(0, 10).map((item, i) => {
                    return (
                        <li key={i} className="char__comics-item">
                            <Link to={`/comics/${item.resourceURI.substring(43)}`}>
                                {item.name} 
                            </Link>
                        </li>
                    )                   
                })}
            </ul>
        </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number, 
}

export default CharInfo;