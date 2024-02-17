import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'

function TodoList() {
    const [todo,setTodo]=useState('')


    useEffect(()=>{
        getTodo();
    },[]);

  const getTodo=()=>{
    let url='https://dummyjson.com/todos';
    fetch(url).then(res=>res.json()).then(data=>{
        let dataTodo=data.todos;
        let randomNum=Math.floor(Math.random()*dataTodo.length)
        let randomTodo=dataTodo[randomNum];

        setTodo(randomTodo.todo)
    });
  };

  const handleClick=()=>{
    getTodo();
  };


    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
                <Card style={{width:'50%',border:'white 1px solid rounded'}}>
                    <Card.Body>
                        <Card.Text className='text-center'>
                            {todo}
                        </Card.Text>
                        <div className="btnDiv d-flex justify-content-center"> 
                        <Button variant="primary" onClick={handleClick}>Random Todo Generator</Button>
                        </div>
                       
                    </Card.Body>
                </Card>
            </div>

        </>

    )
}

export default TodoList