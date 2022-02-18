import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TasksList from './components/TasksList/TasksList';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.mainView}>
      <NewTaskForm />
      <TasksList />
    </div>
  );
}

export default App;