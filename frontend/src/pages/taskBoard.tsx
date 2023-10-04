import TaskColumn from '../components/taskColumn';

const taskBoard = () => {
  return (
    <div className='page'>
      <h2>Task Board</h2>
      <TaskColumn />
      <TaskColumn />
      <TaskColumn />
    </div>
  );
};
export default taskBoard;
