import {BookingInterface} from "../../utils/interfaces/BookingInterface";
import {dateToString} from "../../utils/interfaces/DateToString";

const BookingsTableRowDetails = (props: {booking: BookingInterface}) => {
    return (
        <div>
            <p>Period: {dateToString(props.booking.dateFrom)} - {dateToString(props.booking.dateTo)}</p>
            <p>Price: {props.booking.price}</p>
        </div>
    )
}

export default BookingsTableRowDetails;