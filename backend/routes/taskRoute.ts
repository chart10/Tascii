import { Router } from 'express';
import taskService from '../services/taskService.js';
const router = Router();

router.route('/').get(async (req, res) => {
  //   const response = getAllTasks();

  const tasks = await taskService.getAllTasks();
  res.status(200).send(tasks);
});

router.route('/').post(async (req, res) => {
  const task = await taskService.createTask();
  res.status(200).send(task);
});

export default router;
