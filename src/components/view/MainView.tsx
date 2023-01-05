import {useRecoilState} from "recoil";
import {counterAtom} from "../../recoil/counterAtom";

const MainView = () => {

    const [counter, setCounter] = useRecoilState(counterAtom);

    return (
        <div>
            <div>Hello Bookly! {counter>1 && 'x'+counter}</div>
            <button onClick={()=>setCounter(counter+1)}>Hi</button>
        </div>
    )
}

export default MainView;