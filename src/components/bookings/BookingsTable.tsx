import {Table} from "react-bootstrap";
import {BookingInterface} from "../../utils/interfaces/BookingInterface";
import BookingsTableRow from "./BookingsTableRow";

const BookingsTable = (props: {data: BookingInterface[]}) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Booking Type</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((booking, id) =>
                    <BookingsTableRow key={id} id={id} booking={booking}/>
                )}
            </tbody>
        </Table>
    )
}

export default BookingsTable;