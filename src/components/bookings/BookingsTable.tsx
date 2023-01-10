import {Table} from "react-bootstrap";
import UsersTableRow from "../users/UsersTableRow";
import {BookingInterface, BookingType} from "../../utils/interfaces/BookingInterface";

const BookingsTable = (props: {data: BookingInterface[]}) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Booking Type</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((booking, id) =>
                    <p>id</p>
                )}
            </tbody>
        </Table>
    )
}

export default BookingsTable;