import {useDispatch, useSelector} from "react-redux"
import { decrement, increment } from "./client"
function Forms () {
    const dispatch = useDispatch();
    const {deger} = useSelector(state => state.deger);
    return(
        <>
        <div>
            <button onClick={()=>dispatch(decrement())} >Decrement</button>
            <button onClick={()=>dispatch(increment())} >Increment</button>
            <p> {deger} </p>
        </div>
        </>
    )
};
export default Forms;