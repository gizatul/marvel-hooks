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
        newItemLoading: false, 
        offset: 1247, 
        charEnded: false,
    }
    
    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest(); 
    }

    onRequest = (offset) => { 
        this.onCharListLoading(); 
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded) 
            .catch(this.onError)
    }

    onCharListLoaded = (newCharList) => { 
        let ended = false; 
        if (newCharList.length < 9) { 
            ended = true;
        }

        this.setState(({offset, charList}) => ({ 
                charList: [...charList, ...newCharList], 
                loading: false,
                newItemLoading: false,
                offset: offset + 9, 
                charEnded: ended, 
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

    
    itemRefs = []; 

    setRef = (ref) => { 
        this.itemRefs.push(ref); 
    }

    focusOnItem = (id) => { 
        this.itemRefs.forEach(item => {
            item.classList.remove('char__item_selected')
        });
        this.itemRefs[id].classList.add('char__item_selected');
        this.itemRefs[id].focus(); 
    }

    renderItems(arr) {
        const items =  arr.map((item, i) => {
            let objectFit;
            item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? objectFit = 'unset' : objectFit = 'cover';

            return (
                <li 
                    tabIndex='0'
                    className="char__item"
                    key={item.id}
                    ref={this.setRef} 
                    onClick={() => {
                        this.props.onCharSelected(item.id); 
                        this.focusOnItem(i); 
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            this.props.onCharSelected(item.id);
                            this.focusOnItem(i); 
                        }
                    }}>
                        <img src={item.thumbnail} alt={item.name} style={{objectFit: objectFit}}/>
                        <div className="char__name">{item.name}</div>
                </li>
            )
        });
        
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