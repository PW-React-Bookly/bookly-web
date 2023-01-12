import {BookingInterface, BookableType} from "../../utils/interfaces/BookingInterface";
import BookingsTableRowDetails from "./BookingsTableRowDetails";

const BookingsTableRow = (props: {id: number, booking: BookingInterface}) => {
    return (
        <tr>
            <td >{props.id + 1}</td>
            <td>{props.booking.user.lastName}</td>
            <td>{props.booking.user.firstName}</td>
            <td>{props.booking.bookableType}</td>
            <td><BookingsTableRowDetails booking={props.booking}/></td>
        </tr>
    );
}

export default BookingsTableRow;