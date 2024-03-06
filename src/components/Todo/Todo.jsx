import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState(["Everything is Okay"]);
  const [inputTask, setInputTask] = useState("");

  const handleSubmit = () =>{

    if(inputTask != ""){
        setTodo([...todo, inputTask]);
        setInputTask("");
        
    }
  }

  const delteTask = (index) =>{

        //const updatedTask = 
  }

  return (
    <>
      <div className="text-center pt-5">
        <input
          type="text"
          onChange={(e)=>setInputTask(e.target.value)}
          value={inputTask}
          className="border border-gray-400 p-1 rounded-sm outline-none "
        />
        <button 
            onClick={handleSubmit}
            className=" bg-orange-500 text-white mx-4 p-1 px-2 rounded-sm">
          
          Add Task
        </button>
      </div>

      <div className="text-center pt-5">
        <ul>
          {todo.map((eachtodo, index) => (
            <li className="mt-2"  key={index}> {eachtodo} <button onClick={()=> delteTask(index)} className=" bg-red-600 text-white px-2 py-1 mx-2 rounded-sm"> Delete </button> </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
