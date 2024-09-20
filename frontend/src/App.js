import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>ToDo Application</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;

