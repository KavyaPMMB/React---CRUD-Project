import React, { Fragment } from 'react'
import Table from 'react-bootstrap/Table';
import task from './Task';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    let history=useNavigate()

    const handleedit=(id,tasks,date)=>{
        localStorage.setItem('Tasks',tasks)
        localStorage.setItem('Date',date)
        localStorage.setItem('id',id)


    }
    const handleDelete=(id)=>{
        let index=task.map(function(e){
            return e.id
        }).indexOf(id)
        task.splice(index,1)
        history();

    }
  return (
    <Fragment>
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>id</th>
              <th>Tasks</th>
              <th>Date</th>
              <th>Actions</th>
              
            </tr>
          </thead>
          <tbody>
            {task && task.length > 0
              ? task.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.Tasks}</td>
                      <td>{item.Date}</td>
                      <td>
                      
                      <Link to={'/edit'}>
                      <Button onClick={()=>handleedit(item.id,item.Tasks,item.Date)} variant="outline-light">Edit</Button>{" "}
                      </Link>
                      <Button onClick={()=>handleDelete(item.id)} variant="outline-light">Delete</Button>

                      </td>
                      
                    </tr>
                  );
                })
              : null}
          </tbody>
        </Table>
        <br></br>
        <Link to={'/create'} style={{textDecoration:"none"}}>
        <div className="d-grid gap-2">
      <Button variant="dark" size="lg">
        Write a Task
      </Button>
      </div>
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;
