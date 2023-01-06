import {useRecoilState} from "recoil";
import {counterAtom} from "../../recoil/counterAtom";

const UsersPage = () => {

    const [counter, setCounter] = useRecoilState(counterAtom);

    return (
        <div>
            <div>Hello Bookly from Users! {counter>1 && 'x'+counter}</div>
            <button onClick={()=>setCounter(counter+1)}>Hi</button>
        </div>
    )
}

export default UsersPage;