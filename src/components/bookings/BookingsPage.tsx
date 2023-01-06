import {useRecoilState} from "recoil";
import {counterAtom} from "../../utils/recoil/counterAtom";

const BookingsPage = () => {

    const [counter, setCounter] = useRecoilState(counterAtom);

    return (
        <div>
            <div>Hello Bookly from Bookings! {counter>1 && 'x'+counter}</div>
            <button onClick={()=>setCounter(counter+1)}>Hi</button>
        </div>
    )
}

export default BookingsPage;