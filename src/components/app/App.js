import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import {MainPage, ComicsPage, SingleComicPage} from '../pages';
import Page404 from "../pageNotFound/PageNotFound";

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route element={<MainPage/>} path="/"/>
                        <Route element={<ComicsPage/>} path="/comics"/>
                        <Route element={<SingleComicPage/>} path="/comics/:comicId"/> {/* ключ :comicId прописываем вручную для дальнейшего присвоения туда id*/}
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;