import Task from '../daos/models/task.js';

const getAllTasks = async () => {
  return Task.find({});
};

const createTask = async (name: string, completed: boolean = false) => {
  const task = { name, completed };
  return Task.create(task);
};

const modifyTask = async (id: string, updateData: object) => {
  const task = await Task.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
  return task;
};

const deleteTask = async (id: string) => {
  const task = await Task.findByIdAndDelete(id);
  return task;
};

// Task Routes:
//      Modify task
//      Delete task
//      Filter tasks

export default { getAllTasks, createTask, modifyTask, deleteTask };
