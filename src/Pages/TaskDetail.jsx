import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../redux/features/taskSlice';
import TaskForm from '../Components/TaskForm';

const TaskDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const task = useSelector(state => 
    state.tasks.tasks.find(task => task.id === id)
  );

  const handleUpdate = (updatedTask) => {
    dispatch(updateTask(updatedTask));
    navigate('/tasks');
  };

  const handleDelete = () => {
    dispatch(deleteTask(id));
    navigate('/tasks');
  };

  if (!task) {
    return <div className="container mx-auto p-4">Task not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Task Details</h1>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Delete Task
        </button>
      </div>
      <TaskForm taskToEdit={task} onSubmit={handleUpdate} />
    </div>
  );
};

export default TaskDetail;