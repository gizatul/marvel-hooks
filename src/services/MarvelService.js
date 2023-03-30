import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp(); //деструктуризация возвращаемого объекта из useHttp

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=cb9119d84ffeb91c59dc6c6080764863';
    const _baseOffset = 1247;

    const getAllComics = async (offset = '0') => {
        const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComic); //сокращенный синтаксис map
    }
    
    const getComic = async (id = 32) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComic(res.data.results[0]);
    }

    const _transformComic = (comic) => {
        return {
            id: comic.id,
            title: comic.title,
            thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
            price: comic.prices[0].price ? comic.prices[0].price + '$' : 'Not available',
            description: comic.description || 'There is no description',
            lang: comic.textObjects[0]?.language || 'en-us', //использование ?. чтобы не было ошибки если не существует //выбрасывает undefined
            pages: comic.pageCount ? comic.pageCount + 'p.' : 'No information about the number of pages',
            resourceURI: comic.resourceURI,
        }
    }
  
    const getAllCharacters = async (offset = _baseOffset) => { 
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter); //аналог записи res.data.results.map(char => ._transformDataComics(char)) //внутрь map передается callback-ф-я которая содержится в ф-ии _transformCharacter
    }

    const getCharacterByName = async (name) => {
        const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
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
            fullDescription: char.description ? char.description : 'There is not description' ,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            comics: char.comics.items,
        } 
    }
    return {loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComic, getCharacterByName}
}
export default useMarvelService;