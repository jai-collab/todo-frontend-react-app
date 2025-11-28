import { useState } from 'react';
import TaskForm from '../Components/TaskForm';
import TaskList from '../Components/TaskList';

const Tasks = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Your Tasks</h1>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add Task
        </button>
      </div>
      
      {showForm && (
        <div className="mb-6">
          <TaskForm onCancel={() => setShowForm(false)} />
        </div>
      )}
      
      <TaskList />
    </div>
  );
};

export default Tasks;