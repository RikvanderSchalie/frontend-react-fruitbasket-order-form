import { useState}  from 'react'

import './App.css';


function  Fruitbutton (props){

    const [count, setCount] = useState(0)

    return ( <div>
        <div>
        {props.name} : {count}
            { }
            <button  onClick={() => setCount(count + 1)}>+</button>
            <button  onClick={() => setCount(count - 1)}>-</button>

        </div>
            <button  onClick={() => setCount(0) }>reset</button>
    </div>)

}
export default Fruitbutton