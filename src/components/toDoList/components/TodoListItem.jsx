const TodoListItem =({todos=[]})=> {
    return ( <div>
     {todos?.map((data,i)=>(
        <div key={data+i}>
            {data}
        </div>
     ))}

    </div>
    )
}

export default TodoListItem;