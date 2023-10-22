import Task from '../daos/models/task.js';

const getAllTasks = async () => {
  return Task.find({});
};

const createTask = async () => {
  return 'task will be created in this line';
};

export default { getAllTasks, createTask };
