import { useDispatch ,useSelector} from "react-redux";
import {increment,decrement,resetHandler} from './Redux/slices/couterSlice'
const Counter = () =>{
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return(
            <div className="flex flex-col justify-center">
                <h1 className="text-center text-slate-300 my-5 text-xl font-semibold">Increment and Decrement</h1>
        <div className="flex gap-10 border p-5  bg-white">
            <div className={`border-r border-slate-600 px-5`}>
                <button onClick={()=>{dispatch(increment())}} className={`hover:text-red-500`}>Inc</button>
            </div>
            <div className="px-1">
                <p>{count}</p>
            </div>
            <div className="border-l border-slate-600 px-5" >
                <button onClick={()=>dispatch(decrement())} className={`hover:text-red-500`}>Dec</button>
            </div>
        </div>
            <button className="m-auto text-slate-300 my-5 text-xl font-semibold border px-5 py-1 rounded-md" onClick={() => dispatch(resetHandler())}>Reset</button>
        </div>
    )
}
export default Counter;