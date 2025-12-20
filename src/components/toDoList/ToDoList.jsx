import Input from "./components/Input";
import Button from "./components/Button";
import TodoListItem from "./components/TodoListItem";
import {useState} from "react"

const ToDoList = () => {

    const [userInputVal,setUserInputVal] = useState("")
    const [list,setList] = useState([]);

    const handleInputChage = (value)=>{
        setUserInputVal(value);
    }

    const handleAddToDoButton = (name)=>{
        if(!userInputVal) return 
        const currTodos = list;
        setList([userInputVal,...currTodos])
        setUserInputVal("")
        console.log("handleAddButtonClicked",[...currTodos,userInputVal])
    }
console.log("list",list)
    return (
    <div>
     <Input value={userInputVal} placeHolder="enter todo" onChange={handleInputChage}/>
     <Button name="ADD ToDo" onClick={handleAddToDoButton}/>
     <div>
     <TodoListItem todos={list}  />
     </div>
     To Do List 
    </div>
    )
}

export default ToDoList;