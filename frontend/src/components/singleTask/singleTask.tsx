import './singleTask.css';

interface Props {
  taskName?: string;
  taskBody?: string;
}

const singleTask = (props: Props) => {
  const { taskName, taskBody } = props;
  return <div className='single-task'>{taskName}</div>;
};
export default singleTask;
