import { useState}  from 'react'
import App from "./App";
import './App.css';


function  Fruitbutton (props){



    const [count, setCount] = useState(0)

    function Resetter (){
       setCount(0)
    }


    return ( <div>

        {props.name} : {count}
            { }
            <button  onClick={() => setCount(count + 1)}>+</button>
            <button  onClick={() => setCount(count - 1)}>-</button>
            <button  onClick={(Resetter)}>reset</button>

    </div>

    )

}
export default Fruitbutton