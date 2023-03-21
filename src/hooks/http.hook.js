import {useState, useCallback} from 'react';

export const useHttp = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-type' : 'application/json'}) => {

        setLoading(true);
        try {
            let response = await fetch(url, {method, body, headers});

            if (!response.ok) { 
                throw new Error(`Could not fetch ${url}, status: ${response.status}`); 
            }
            const data = await response.json();
            setLoading(false);
            return data;
        }   catch(error) {
            setLoading(false);
            setError(error.message); //передаем текст ошибки (более продвинутый функционал)
            throw error; //выкидываем ошибку
        }
    }, []) //usecallback используем, тк в дальнейшем возможно эту функцию будем размещать внутрь дочерних компонентов и не нужно вызывать лишних запросов - т.е. мемоизируем
    const clearError = useCallback(() => setError(null), []); //Ф-я для очистки ошибки
    return {loading, request, error, clearError};
}
