import { Component } from 'react';
import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

class RandomChar extends Component {

    state = { //данные берем из api marvel //в state параметры загрузки и ошибки по умолчанию
        char: {}, //характеристика персонажа
        loading: true,
        error: false,
    }

    marvelService = new MarvelService(); //создаем новое св-во marvelService внутри класса RandomChar 

    componentDidMount() {
        this.updateChar(); 
    }

    onCharLoaded = (char) => { //наш персонаж загрузился
        this.setState({
            char: char, 
            loading: false, //после окончания загрузки loading - false
        }) // и в state записываем char
    }

    onCharLoading = () => {
        this.setState({
            loading: true,
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true,
        })

    }

    updateChar = () => {
        let id = Math.floor((Math.random() * (1011400 - 1011000 + 1)) + 1011000);
        this.onCharLoading(); //запускаем спиннер перед тем как пойдет запрос ниже
        this.marvelService
            .getCharacter(id) //возвращается малый объект
            .then(this.onCharLoaded) //загрузка завершена  - запуск функции onCharLoaded
            .catch(this.onError) //ошибка - запуск ф-ции onError
    }

    render() {
        const {char, loading, error} = this.state; //деструктуризация из state
        //Создание переменных для условного рендеринга
        const errorMessage = error ? <ErrorMessage/> : null; //если error - true то рендерим ErrorMessage
        const spinner = loading ? <Spinner/> : null; //если loading - true то рендерим Spinner
        const content = !(loading || error) ? <View char={char}/> : null; //Если нет loading или нет error то грузим контент

        return (
            <div className="randomchar">
                {errorMessage}
                {spinner}
                {content}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button onClick={this.updateChar} className="button button__main">
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }
}



const View = ({char}) => { //рендерящий компонент
    const {thumbnail, description, name, homepage, wiki} = char;
    let objectFit;
    thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? objectFit = 'contain' : objectFit = 'unset';

    return (
        <div className="randomchar__block">
            <img src={thumbnail} alt="Random character" className="randomchar__img" style={{objectFit: objectFit}}/>
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {description}
                </p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    ) 
}

export default RandomChar;