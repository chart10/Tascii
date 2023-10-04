import SingleTask from '../singleTask/singleTask';
import './taskColumn.css';

const taskColumn = () => {
  return (
    <div className='task-column'>
      <h3>taskColumn</h3>
      <SingleTask taskName='Feed the Cat' />
    </div>
  );
};
export default taskColumn;
