import UsersTable from "./table/UsersTable";
import PaginationWrapper from "../../common/components/PaginationWrapper";
import {UserInterface} from "../interfaces/userInterface";
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