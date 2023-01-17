// create your App component here
import React from "react";

function App(){
    const [displayDog, setDisplayDog] = React.useState(false)
    
    React.useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then(data=>{
            setDisplayDog(data.message)
        })
    },[])
    
    const element = displayDog ? <img src={displayDog} alt="A Random Dog"/> : <p>Loading...</p>;
    
    
    return (
        <div>
            {element}
            
        </div>
    )
}

export default App;