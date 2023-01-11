import Fetcher from "../util/Fetcher";
import {useContext} from "react";
import {PaginationContext} from "../util/PaginationWrapper";
import {UserInterface} from "../../utils/interfaces/UserInterface";
import useGetPaginatedUsers from "../../utils/fetchers/useGetPaginatedUsers";

const UserFetcher = (props : {children: (data:any[])=>JSX.Element}) => {

    const pageContext = useContext(PaginationContext);
    return (
        <Fetcher fetcher={useGetPaginatedUsers} args={pageContext}>
            {(data: UserInterface[]) =>
                props.children(data)
            }
        </Fetcher>
    )
}

export default UserFetcher;