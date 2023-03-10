import spinner from '../../resources/img/spinner.gif';
import './spinner.scss';

const Spinner = () => {
  return (
    <div className='spinner'>
      <img  src={spinner} alt="loading" />
    </div>
  )
}
export default Spinner;