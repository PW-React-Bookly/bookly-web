import {Table} from "react-bootstrap";
import {UserInterface} from "../../utils/interfaces/UserInterface";
import UsersTableRow from "./UsersTableRow";

const UsersTable = (props: {data: UserInterface[]}) => {
    return (
        <Table>
            <thead>
            <tr>
                <th>#</th>
                <th>Email</th>
                <th>Last Name</th>
                <th>First Name</th>
            </tr>
            </thead>
            <tbody>
                {props.data.map((user, id) =>
                    <UsersTableRow key={id} id={id} user={user}/>
                )}
            </tbody>
        </Table>

    );
}

export default UsersTable;