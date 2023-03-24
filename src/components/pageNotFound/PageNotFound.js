import pageNotFound from '../../resources/img/pageNotFound.webp';
import {Link} from 'react-router-dom';
import './pageNotFound.scss';

const Page404 = () => {
    return (
        <div>
            <img className="img_404" src={pageNotFound} alt="page not found"/>
            <h1 className='title_404'>Page not found</h1>
            <Link className='link_menu' to='/'>Back to main page</Link>
        </div>
    )
}

export default Page404;