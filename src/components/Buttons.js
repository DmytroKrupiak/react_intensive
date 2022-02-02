import { useContext } from 'react';
import Context from '../lib/Context';

const Buttons = () => {
  const value = useContext(Context);
  return (
    <div className='btns'>
      <button type='reset' onClick={() => value.handleReset()}>
        Отмена
      </button>
      <button
        className='green'
        type='submit'
        onClick={(e) => value.handleSubmit(e)}
      >
        Сохранить
      </button>
    </div>
  );
};

export default Buttons;
