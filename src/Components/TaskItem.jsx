import { useDispatch } from 'react-redux';
import { deleteTask, toggleComplete } from '../redux/features/taskSlice';
import { Link } from 'react-router-dom';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className={`p-4 border rounded mb-2 ${task.completed ? 'bg-gray-100' : 'bg-white'}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className={`font-bold ${task.completed ? 'line-through text-gray-500' : ''}`}>
            {task.title}
          </h3>
          <p className="text-gray-600">{task.description}</p>
        </div>
        <div className="flex space-x-2">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(toggleComplete(task.id))}
            className="h-5 w-5"
          />
          <Link
            to={`/tasks/${task.id}`}
            className="px-3 py-1 bg-blue-100 text-blue-600 rounded"
          >
            Edit
          </Link>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="px-3 py-1 bg-red-100 text-red-600 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;