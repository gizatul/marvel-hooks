import './charSearch.scss';
import '../../style/button.scss';
import { Formik } from 'formik';

const CharSearch = () => {
    return (
        <div className='char__search'>
            <div className='char__search-title'>Or find a character by name:</div>
            <Formik
                initialValues={{
                    search: '',
                }} 
                validate = {values => {
                    const errors = {};
                    if (!values.search) {
                        errors.search = "This field is required"
                    }
                    return errors;
                }}
                onSubmit = {values => console.log(JSON.stringify(values, null, 2))}>
                {({
                    values,
                    errors,
                    handleSubmit,
                    handleChange,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className='char__search-panel'>
                            <input 
                                id="search" 
                                name="search" 
                                type='text' 
                                placeholder="Enter name" 
                                value={values.search}
                                onChange={handleChange}/>
                            <button className='button button__main'>
                                <div className="inner">FIND</div>
                            </button>
                        </div>
                        {errors.search ? <div className='char__search-error'>{errors.search}</div> : null}
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default CharSearch;