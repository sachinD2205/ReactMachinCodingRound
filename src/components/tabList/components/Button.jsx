const Button = ({name="",onButtonChange=()=>{}})=>{
 return <button type="button"  onClick={()=> onButtonChange(name)}>
    {name}
 </button>
}

export default Button;