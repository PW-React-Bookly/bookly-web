import Fetcher from "../../common/components/Fetcher";
import {useContext} from "react";
import {PaginationContext} from "../../common/components/PaginationWrapper";
import {UserInterface} from "../interfaces/userInterface";
import useGetUsers from "../utils/useGetUsers";

const UserFetcher = (props : {children: (data:any[])=>JSX.Element}) => {

    const pageContext = useContext(PaginationContext);
    return (
        <Fetcher fetcher={useGetUsers} args={pageContext}>
            {(data: UserInterface[]) =>
                props.children(data)
            }
        </Fetcher>
    )
}

export default UserFetcher;