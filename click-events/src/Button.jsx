function Button(){
    
    let count =0;

    const handleClick = (e) => e.target.textContent = "u clicked me"
    
    return(<button onClick={(e) => handleClick(e)}>Click Me☺️</button>)
}
export default Button