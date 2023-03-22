import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp(); //деструктуризация возвращаемого объекта из useHttp

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=cb9119d84ffeb91c59dc6c6080764863';
    const _baseOffset = 1247;

    const getAllComics = async (offset = '0') => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComic); //сокращенный синтаксис map
    }
    
    const getComic = async (id = 32) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        console.log(_transformComic(res.data.results[0]));
        return _transformComic(res.data.results[0]);
    }

    const _transformComic = (comic) => {
        return {
            id: comic.id,
            title: comic.title,
            thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
            price: comic.prices[0].price + '$',
            description: comic.description,
            lang: comic.textObjects[0].language,
            pages: comic.pageCount,
        }
    }
  
    const getAllCharacters = async (offset = _baseOffset) => { 
        const res = await request(`${_apiBase}characters?orderBy=issueNumber&limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter); //аналог записи res.data.results.map(char => ._transformDataComics(char)) //внутрь map передается callback-ф-я которая содержится в ф-ии _transformCharacter
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
    return {loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComic}
}
export default useMarvelService;