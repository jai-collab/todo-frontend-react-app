// This is a mock service that works with localStorage
// In a real app, you would replace this with actual API calls

const TASK_KEY = 'tasks';

export const getTasks = () => {
  const tasks = localStorage.getItem(TASK_KEY);
  return tasks ? JSON.parse(tasks) : [];
};

export const saveTasks = (tasks) => {
  localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
};

export const createTask = (task) => {
  const tasks = getTasks();
  tasks.push(task);
  saveTasks(tasks);
  return task;
};

export const updateTask = (updatedTask) => {
  const tasks = getTasks();
  const index = tasks.findIndex(t => t.id === updatedTask.id);
  if (index !== -1) {
    tasks[index] = updatedTask;
    saveTasks(tasks);
    return updatedTask;
  }
  return null;
};

export const deleteTask = (id) => {
  const tasks = getTasks();
  const filteredTasks = tasks.filter(t => t.id !== id);
  saveTasks(filteredTasks);
  return id;
};