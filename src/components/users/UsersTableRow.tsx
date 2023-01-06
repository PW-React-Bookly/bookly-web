import {UserInterface} from "../../utils/interfaces/UserInterface";

const UsersTableRow = (props: {id: number, user: UserInterface}) => {
    return (
        <tr>
            <td>{props.id + 1}</td>
            <td>{props.user.email}</td>
            <td>{props.user.lastName}</td>
            <td>{props.user.firstName}</td>
        </tr>
    );
}

export default UsersTableRow;