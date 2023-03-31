import {useState, useCallback} from 'react';

export const useHttp = () => {

    const [process, setProcess] = useState('waiting');

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-type' : 'application/json'}) => {

        setProcess('loading');

        try {
            let response = await fetch(url, {method, body, headers});

            if (!response.ok) { 
                throw new Error(`Could not fetch ${url}, status: ${response.status}`); 
            }
            const data = await response.json();
            return data;
        }   catch(error) {
            setProcess('error');
            throw error; //выкидываем ошибку
        }
    }, []) //usecallback используем, тк в дальнейшем возможно эту функцию будем размещать внутрь дочерних компонентов и не нужно вызывать лишних запросов - т.е. мемоизируем
    const clearError = useCallback(() => {
        setProcess('loading');
    }, []); //Ф-я для очистки ошибки
    return { request,  clearError, process, setProcess};
}
