import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import taskService from '../services/taskService.js';
const router = Router();

router.route('/').get(async (req, res) => {
  //   const response = getAllTasks();

  const tasks = await taskService.getAllTasks();
  res.status(StatusCodes.OK).send(tasks);
});

router.route('/').post(async (req, res) => {
  console.log(req.body);
  if (!req.body.name) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .send('You must include a name for the new task.');
    return;
  }
  const task = await taskService.createTask(req.body.name, req.body.completed);
  res.status(StatusCodes.OK).send(task);
});

router.route('/:id').patch(async (req, res) => {
  const task = await taskService.modifyTask(req.params.id, req.body);
  if (!task) {
    res.status(StatusCodes.NOT_FOUND).send({ msg: 'Not found' });
    return;
  }
  res.status(StatusCodes.OK).send({ msg: 'success', task });
});
router.route('/:id').delete(async (req, res) => {
  const task = await taskService.deleteTask(req.params.id);
  if (!task) {
    res.status(StatusCodes.NOT_FOUND).send({ msg: 'No task to delete' });
    return;
  }
  res.status(StatusCodes.OK).send({ msg: 'Task deleted successfully' });
});

export default router;
