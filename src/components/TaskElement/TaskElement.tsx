import React, { useEffect, useRef } from 'react';
import { useAppDispatch } from '../../redux';
import {
  markTaskAsFavourite,
  removeFromFavourite,
  setIsEdit,
  setNewBody,
  updateBodyOfTask,
} from '../../redux/actions/tasksActions';
import TaskSettings from './TaskSettings';
import { ReactComponent as Star } from '../../icons/star.svg';
import { ReactComponent as Dot } from '../../icons/dot.svg';
import { ITask } from '../../types';
import styles from './TaskElement.module.css';

const TaskElement = ({
  id,
  task,
  onDelete,
}: {
  id: number;
  task: ITask;
  onDelete: (task: ITask) => void;
}) => {
  const dispatch = useAppDispatch();
  const { body, completed, favourite, isEdit, newBody } = task;
  const bodyTaskRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEdit && bodyTaskRef.current) {
      bodyTaskRef.current.focus();
    }
  }, [isEdit]);

  const changeValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      dispatch(setNewBody(id, event.target.value));
    }
  };

  const submitNewValue = (event: React.FormEvent) => {
    event.preventDefault();
    if (newBody.length > 160) return;
    dispatch(updateBodyOfTask(id, newBody));
    dispatch(setIsEdit(id, false));
  };

  const toggleFavourite = () => {
    if (favourite) {
      dispatch(removeFromFavourite(id));
    } else {
      dispatch(markTaskAsFavourite(id));
    }
  };

  return (
    <li
      className={`${styles.taskElement} ${completed ? styles.completed : ''}`}
    >
      <button className={styles.favouriteStatus} onClick={toggleFavourite}>
        {favourite ? <Star /> : <Dot />}
      </button>
      {isEdit ? (
        <form onSubmit={submitNewValue}>
          <input
            className={styles.input}
            ref={bodyTaskRef}
            value={newBody}
            onChange={changeValueHandler}
          ></input>
          {newBody.length > 160 ? (
            <p>
              превышен лимит текста задачи на {newBody.length - 160} символов
            </p>
          ) : undefined}
        </form>
      ) : (
        <p>{body}</p>
      )}
      <TaskSettings id={id} onDelete={onDelete} task={task} />
    </li>
  );
};

export default TaskElement;
