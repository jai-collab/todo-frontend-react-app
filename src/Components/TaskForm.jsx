import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../redux/features/taskSlice';

const TaskForm = ({ taskToEdit, onCancel }) => {
  const [task, setTask] = useState(taskToEdit || { title: '', description: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      dispatch(updateTask(task));
    } else {
      dispatch(addTask(task));
    }
    setTask({ title: '', description: '' });
    if (onCancel) onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="3"
        />
      </div>
      <div className="flex justify-end space-x-2">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          {taskToEdit ? 'Update Task' : 'Add Task'}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;