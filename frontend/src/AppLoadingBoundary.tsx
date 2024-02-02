import App from './App';
import { useEffect, useState } from 'react';

const API_HOST = 'http://localhost:3000';

const AppLoadingBoundary = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allTasks, setAllTasks] = useState({});

  const loadAllTasks = async () => {
    const response = await fetch(`${API_HOST}/api/v1/task/`);
    const tasks = await response.json();
    setAllTasks(tasks);
    console.log(tasks);
  };

  useEffect(() => {
    Promise.all([loadAllTasks()]).then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return <App />;
};
export default AppLoadingBoundary;
