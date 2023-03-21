import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp(); //деструктуризация возвращаемого объекта из useHttp

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=cb9119d84ffeb91c59dc6c6080764863';
    const _baseOffset = 1247;
  
    const getAllCharacters = async (offset = _baseOffset) => { 
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => { 
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`); 
        return _transformCharacter(res.data.results[0]); 
    }

    const _transformCharacter = (char) => {  
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

    return {loading, error, getAllCharacters, getCharacter, clearError}
}

export default useMarvelService;