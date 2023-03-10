import error from './error.svg';
import './errorMessage.scss';

const ErrorMessage = () => {
  return (
    <div className='error'>
      <img  src={error} alt="error" />
      <div className='error__text'>Character not found. Please try again</div>
    </div>
  )
}
export default ErrorMessage;