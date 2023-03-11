import { Component } from 'react';
import './charInfo.scss';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import Skeleton from '../skeleton/Skeleton';

class CharInfo extends Component {
    state = {
        char: null,
        loading: false,
        error: false,
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) { //как аргументы получает предыдущее состояние и предыдущие пропсы
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    onCharLoading = () => {
        this.setState({
            loading: true,
        })
    }

    onCharLoaded = (char) => {
        this.setState({
            char: char,
            loading: false,
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true,
        })
    }

    updateChar = () => {
        const {charId} = this.props;

        if(!charId){
            return;
        }

        this.onCharLoading();

        this.marvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        const {char, loading, error} = this.state; //деструктуризация из state
        //Создание переменных для условного рендеринга
        const skeleton = char || loading || error ? null : <Skeleton/>;
        const errorMessage = error ? <ErrorMessage/> : null; //если error - true то рендерим ErrorMessage
        const spinner = loading ? <Spinner/> : null; //если loading - true то рендерим Spinner
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
}

const Info = ({char}) => {
    const {thumbnail, name, description, wiki, homepage, comics} = char;
    let objectFit;
    thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? objectFit = 'contain' : objectFit = 'cover';

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
                {comics.length > 0 ? null : 'Not found'} {/*если есть комиксы то ничего не происходит, иначе выводится надпись */}
                {comics.slice(0, 10).map((item, i) => {
                    return (
                        <li key={i} className="char__comics-item">
                            {item.name} 
                        </li>
                    )                   
                })}
            </ul>
        </>
    )
}

export default CharInfo;