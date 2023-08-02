import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import task from './Task';
import { v4 as uuid } from 'uuid';

function Edit() {
  const [tasks, setTasks] = useState('');
  const [date, setDate] = useState('');
  const [id, setId] = useState('');
  const history = useNavigate();
  const index = task.findIndex((e) => e.id ==id);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const index = task.findIndex((e) => e.id ==id);
    if (index === -1) {
      console.log(`Task with id ${id} not found`);
      return;
    }
  
    task[index].Tasks = tasks;
    task[index].Date = date;
  
    history('/');
  };
  
  useEffect(() => {
    setTasks(localStorage.getItem('Tasks'));
    setDate(localStorage.getItem('Date'));
    setId(localStorage.getItem('id'));
  }, [])
      
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formtasks">
          <Form.Label>Tasks</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tasks"
            value={tasks}
            required
            onChange={(e) => setTasks(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formdate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="date"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" onClick={(e) => handleSubmit(e)}>
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Edit;
