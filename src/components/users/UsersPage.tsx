import {useRecoilState} from "recoil";
import {counterAtom} from "../../utils/recoil/counterAtom";
import UsersTable from "./UsersTable";
import PaginationWrapper from "../util/PaginationWrapper";
import PaginatedFetcher from "../util/PaginatedFetcher";
import useGetPaginatedUsers from "../../utils/fetchers/useGetPaginatedUsers";
import {UserInterface} from "../../utils/interfaces/UserInterface";

const UsersPage = () => {

    const [counter, setCounter] = useRecoilState(counterAtom);

    return (
        <div>
            <div>Hello Bookly from Users! {counter>1 && 'x'+counter}</div>
            <button onClick={()=>setCounter(counter+1)}>Hi</button>
            <PaginationWrapper>
                <PaginatedFetcher paginatedFetcher={useGetPaginatedUsers}>
                    {(data: UserInterface[]) =>
                        <UsersTable data={data}/>
                    }
                </PaginatedFetcher>
            </PaginationWrapper>
        </div>
    )
}

export default UsersPage;