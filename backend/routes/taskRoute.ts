import { Router } from 'express';
import taskService from '../services/taskService.js';
const router = Router();

router.route('/').get(async (req, res) => {
  //   const response = getAllTasks();

  const tasks = await taskService.getAllTasks();
  res.status(200).send(tasks);
});

router.route('/').post(async (req, res) => {
  console.log(req.body);
  if (!req.body.name) {
    res.status(400).send('You must include a name for the new task.');
    return;
  }
  const task = await taskService.createTask(req.body.name, req.body.completed);
  res.status(200).send(task);
});

export default router;
