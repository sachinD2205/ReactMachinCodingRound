const Input = ({value="",onChange=()=>{},placeHolder="enter text"})=>{
    const handleInputChange = (e)=> {
        return onChange(e.target.value)
    }
    return <input type='input' onChange={handleInputChange} value={value} placeholder={placeHolder}/>
}

export default Input;