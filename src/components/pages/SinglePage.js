import './singleComicPage.scss';
import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';
import { useParams } from 'react-router-dom';
import AppBanner from '../appBanner/AppBanner';
import setContent from '../../utils/setContent';

const SinglePage = ({Component, dataType}) => {
    const {id} = useParams(); //используем для связывания адреса страницы с нужным комиксом
    const [data, setData] = useState(null);
    const {getComic, clearError, getCharacter, process, setProcess} = useMarvelService();

    useEffect(() => {
        updateData() // eslint-disable-next-line
    }, [id]);

    const updateData = () => {

        clearError();
        switch (dataType) {
            case 'comic':
                getComic(id).then(onDataLoaded).then(() => setProcess('confirmed'));
                break;
            case 'character':
                getCharacter(id).then(onDataLoaded).then(() => setProcess('confirmed'));
        }
    }

    const onDataLoaded = (data) => {
        setData(data);
    }

    return (
        <>
            <AppBanner/>
            {setContent(process, Component, data)}
        </>
    )
}

export default SinglePage;