import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import MarvelService from './services/MarvelService'
import './style/style.scss';

const marvelService = new MarvelService();
marvelService.getAllCharacters().then(res => res.data.results.forEach(element => {
  console.log(element.name);
}));
marvelService.getCharacter(1017332).then(res => console.log(res));


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

