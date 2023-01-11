import {UserInterface} from "../../utils/interfaces/UserInterface";
import BanUserButton from "./BanUserButton";

const UsersTableRow = (props: {id: number, user: UserInterface}) => {
    return (
        <tr>
            <td>{props.id + 1}</td>
            <td>{props.user.email}</td>
            <td>{props.user.lastName}</td>
            <td>{props.user.firstName}</td>
            <td><BanUserButton userId={props.user.id}/></td>
        </tr>
    );
}

export default UsersTableRow;