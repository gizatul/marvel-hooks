import React, {Component} from 'react';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import MarvelService from '../../services/MarvelService';
import PropTypes from 'prop-types';
import './charList.scss';

class CharList extends Component {

    state = {
        charList: [],
        loading: true,
        error: false,
        newItemLoading: false, //будет вызываться вручную после вызова onRequest
        offset: 1247, //св-во отступа сервиса
        charEnded: false,
    }
    
    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest(); //2. вызываем onRequest первый раз без аргумента, чтобы получить baseOffset по умол(1247)
    }

    onRequest = (offset) => { //1. метод запроса на сервер для получения карточек с персонажами
        this.onCharListLoading(); //3.переключает newItemLoading в true (используем для переключения кнопки load More в disabled)
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded) //4. запускается onCharListLoaded кот-й получает новые данные (newCharList)
            .catch(this.onError)
    }

    onCharListLoaded = (newCharList) => { //5. получает новые данные
        let ended = false; //тех переменная для определения закончились ли персонажи
        if (newCharList.length < 9) { //если в приходящем массиве персонажей меньше 9, то ended true
            ended = true;
        }

        this.setState(({offset, charList}) => ({ 
                charList: [...charList, ...newCharList], //6. из новых данных получаем новое состояние //когда запускаем первый раз, то в charList пустой массив // с каждым последующим запуском элементы будут добавляться
                loading: false,
                newItemLoading: false,
                offset: offset + 9, //после каждой успешной загрузки будем добавлять еще 9 к текущему state
                charEnded: ended, //передаем значение ended
        }))
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true,
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error:true,
        })
    }

    //Реализация фокуса с рефами
    itemRefs = []; //1. Создание массива с рефами

    setRef = (ref) => { //2. Ф-я кот-я принимает аргумент и формирует массив
        this.itemRefs.push(ref); 
    }

    focusOnItem = (id) => { //4. добавление класса для конкретного элемента
        this.itemRefs.forEach(item => {
            item.classList.remove('char__item_selected')
        });
        this.itemRefs[id].classList.add('char__item_selected');
        this.itemRefs[id].focus(); //установка именно "фокуса" на элементе, когда следующее введение символов идет именно в нем. Это особенно важно на всяких мобильных устройствах для удобности.
    }

    // Этот метод создан для оптимизации, 
    // чтобы не помещать такую конструкцию в метод render
    renderItems(arr) {
        const items =  arr.map((item, i) => {
            let objectFit;
            item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? objectFit = 'unset' : objectFit = 'cover';

            return (
                <li 
                    tabIndex='0'
                    className="char__item"
                    key={item.id}
                    ref={this.setRef} //5.формирование массива из ref-ов
                    onClick={() => {
                        this.props.onCharSelected(item.id); ///*по клику через пропсы получаем метод onCharSelected из App.js, который мы приняли //внутрь помещаем наш id элемента по которому кликаем*/
                        this.focusOnItem(i); //6. подсвечивание карточки по клику
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            this.props.onCharSelected(item.id);
                            this.focusOnItem(i); //подсвечивание по нажатию на пробел или Enter
                        }
                    }}>
                    
                        <img src={item.thumbnail} alt={item.name} style={{objectFit: objectFit}}/>
                        <div className="char__name">{item.name}</div>
                </li>
            )
        });
        // А эта конструкция вынесена для центровки спиннера/ошибки
        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }

    render() {

        const {charList, loading, error, offset, newItemLoading, charEnded} = this.state;
        
        const items = this.renderItems(charList);
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button className="button button__main button__long"
                        disabled={newItemLoading}
                        onClick={() => this.onRequest(offset)}
                        style={{'display': charEnded ? 'none' : 'block'}}>
                    <div className="inner">
                        load more
                    </div>
                </button>
            </div>
        )
    }
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired,
}

export default CharList;