const Button = ({name="",onClick =()=>{}})=> {
  
    const onButtonClick = ()=> {
        return onClick(name)
    }


    return <button onClick={onButtonClick}>{name}</button>
}

export default Button;