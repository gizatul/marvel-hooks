import {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/spinner';

const Page404 = lazy(() => import("../pageNotFound/PageNotFound")); //компонент Page404 будет подгружен только когда появится на странице
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));



const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}> {/*пока идет подгрузка будет показан спиннер */}
                        <Routes>
                            <Route element={<MainPage/>} path="/"/>
                            <Route element={<ComicsPage/>} path="/comics"/>
                            <Route element={<SingleComicPage/>} path="/comics/:comicId"/> {/* ключ :comicId прописываем вручную для дальнейшего присвоения туда id*/}
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;