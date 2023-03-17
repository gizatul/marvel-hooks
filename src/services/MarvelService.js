class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=cb9119d84ffeb91c59dc6c6080764863';
  _baseOffset = 1247;
  
  getResource = async (url) => { 
    let res = await fetch(url);
  
    if (!res.ok) { 
        throw new Error(`Could not fetch ${url}, status: ${res.status}`); 
    }   
    return await res.json(); 
  }

  getAllCharacters = async (offset = this._baseOffset) => { 
    const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
    return res.data.results.map(this._transformCharacter);
  }

  getCharacter = async (id) => { 
    const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`); 
    return this._transformCharacter(res.data.results[0]); 
  }

  _transformCharacter = ( char) => {  
    return {
        id: char.id,
        name: char.name,
        description: char.description.length > 180  ? `${char.description.slice(0, 180)}...` : char.description.length <= 0 ? 'There is not description' : char.description,
        homepage: char.urls[0].url,
        wiki: char.urls[1].url,
        thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
        comics: char.comics.items,
    } 
  }
}

export default MarvelService;