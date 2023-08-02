import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import task from './Task';
import { v4 as uuid } from 'uuid';

function Add() {
  const [tasks, setTasks] = useState('');
  const [date, setDate] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuid();
    let uniqueid = id.slice(0, 8);
    let a = tasks;
    let b = date;
    task.push({ id: uniqueid, Tasks: a, Date: b });
    history('/');
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formTasks">
          <Form.Label>Tasks</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tasks"
            required
            onChange={(e) => setTasks(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)} required
          />
        </Form.Group>
        <Button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;
