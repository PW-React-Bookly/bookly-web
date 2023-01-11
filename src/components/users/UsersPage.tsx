import UsersTable from "./UsersTable";
import PaginationWrapper from "../util/PaginationWrapper";
import {UserInterface} from "../../utils/interfaces/UserInterface";
import UserFetcher from "./UserFetcher";

const UsersPage = () => {
    return (
        <div>
            <PaginationWrapper>
                <UserFetcher>
                    {(data: UserInterface[]) =>
                        <UsersTable data={data}/>
                    }
                </UserFetcher>
            </PaginationWrapper>
        </div>
    )
}

export default UsersPage;