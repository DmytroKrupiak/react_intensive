import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux';
import { createNewTask } from '../../redux/actions/tasksActions';
import { ReactComponent as CreateIcon } from '../../icons/create.svg';
import styles from './NewTaskForm.module.css';

const NewTaskForm = () => {
  const dispatch = useAppDispatch();
  const { isLoaded } = useAppSelector((store) => store.tasks);
  const [value, setValue] = useState('');

  const changeValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (!value || value.length > 160 || !isLoaded) return;
    dispatch(createNewTask(value));
    setValue('');
  };

  return (
    <div className={styles.newElementForm}>
      <h4>Создание новой задачи</h4>
      <form onSubmit={submitHandler} className={styles.form}>
        <input value={value} onChange={changeValueHandler}></input>
        <button onSubmit={submitHandler}>
          <CreateIcon />
        </button>
      </form>
      <p>
        {value.length > 160
          ? `превышен лимит текста задачи на ${value.length - 160} символов`
          : ''}
      </p>
    </div>
  );
};

export default NewTaskForm;
