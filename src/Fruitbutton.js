import { useState}  from 'react'
import { useForm } from "react-hook-form"


function  Fruitbutton (props){

    //useState is een hook, een hook begint altijd met "use"
    //een hook is een loop

const [count, setCount] = useState(0)
const { setValue } = useForm();
    return ( <div>
        {props.name} : {count}
            { }
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>

 {/*       {props.testProp} : {count}*/}
 {/*       { }*/}
 {/*       <button>TEST</button>*/}

 
    </div>)


}

export default Fruitbutton