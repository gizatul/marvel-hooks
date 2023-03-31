import {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/spinner';

const Page404 = lazy(() => import("../pageNotFound/PageNotFound")); 
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SinglePage = lazy(() => import('../pages/SinglePage'));
const SingleComicLayout = lazy(() => import('../pages/SingleComicLayout/SingleComicLayout'));
const SingleCharLayout = lazy(() => import('../pages/SingleCharLayout/SingleCharLayout'));


const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route element={<MainPage/>} path="/"/>
                            <Route element={<ComicsPage/>} path="/comics"/>
                            <Route path="/characters/:id" element={<SinglePage Component={SingleCharLayout} dataType='character'/>} />
                            <Route path="/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType='comic'/>} />      
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;