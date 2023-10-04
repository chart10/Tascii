import TaskColumn from '../../components/taskColumn/taskColumn';
import './taskBoard.css';

const taskBoard = () => {
  return (
    <div className='task-board'>
      <TaskColumn />
      <TaskColumn />
      <TaskColumn />
    </div>
  );
};
export default taskBoard;
