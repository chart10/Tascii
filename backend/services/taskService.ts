import Task from '../daos/models/task.js';

const getAllTasks = async () => {
  return Task.find({});
};

const createTask = async (name: string, completed: boolean = false) => {
  const task = { name, completed };
  return Task.create(task);
};

export default { getAllTasks, createTask };
