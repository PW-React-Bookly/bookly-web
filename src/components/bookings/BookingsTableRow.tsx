import {BookingInterface, BookingType} from "../../utils/interfaces/BookingInterface";
import BookingsTableRowDetails from "./BookingsTableRowDetails";

const BookingsTableRow = (props: {id: number, booking: BookingInterface}) => {
    return (
        <tr>
            <td>{props.id + 1}</td>
            <td>{props.booking.user.lastName}</td>
            <td>{props.booking.user.firstName}</td>
            <td>{BookingType[props.booking.bookingType]}</td>
            <td><BookingsTableRowDetails booking={props.booking}/></td>
        </tr>
    );
}

export default BookingsTableRow;