import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useSelector(state => state.tasks);

  return (
    <div className="mt-4">
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks found. Add a task to get started!</p>
      ) : (
        tasks.map(task => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;