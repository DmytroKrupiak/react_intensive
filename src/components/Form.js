import Buttons from './Buttons';
import Inputs from './Inputs';
import Textareas from './Textareas';

const Form = () => {
  return (
    <form action='#'>
      <div className='form-inner'>
        <Inputs />
        <Textareas />
      </div>
      <Buttons />
    </form>
  );
};

export default Form;
