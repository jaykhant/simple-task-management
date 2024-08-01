import { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = ({ tasks, fetchTasks }) => {
  const [filter, setFilter] = useState('All');



  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`http://localhost:4000/tasks/${id}`, { status });
      fetchTasks();
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 mb-4"
      >
        <option>All</option>
        <option>To Do</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <ul>
        {tasks.filter(task => filter === 'All' || task.status === filter).map(task => (
          <li key={task._id} className="border p-2 mb-2">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <select
              value={task.status}
              onChange={(e) => handleStatusChange(task._id, e.target.value)}
              className="border p-1 mr-2"
            >
              <option>To Do</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>
            <button
              onClick={() => handleDelete(task._id)}
              className="bg-red-500 text-white p-1"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;