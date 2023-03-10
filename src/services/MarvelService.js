class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=cb9119d84ffeb91c59dc6c6080764863';
  
  getResource = async (url) => { 
    let res = await fetch(url);
  
    if (!res.ok) { 
        throw new Error(`Could not fetch ${url}, status: ${res.status}`); 
    }   
    return await res.json(); 
  }

  getAllCharacters = async () => {
    const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=1244&${this._apiKey}`);
    return res.data.results.map(this._transformCharacter);
  }

  getCharacter = async (id) => { //ф-я асинхронна!!! нужно добавлять async/await и это искусственно становится промисом
    const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`); //рез-т получаем не сразу от сервера, нужно дождаться (поэтому await)
    return this._transformCharacter(res.data.results[0]); //трансформируем полученный объект в малый
  }

  //Трансформация данных (возвращает только нужные нам данные)
  _transformCharacter = (char) => {  //получаем большой объект
    return {
        name: char.name,
        description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
        homepage: char.urls[0].url,
        wiki: char.urls[1].url,                   
        thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension, 
    } //возвращаем малый
  }
}

export default MarvelService;