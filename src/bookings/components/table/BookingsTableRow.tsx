import {BookingInterface} from "../../interfaces/bookingInterface";
import BookingsTableRowDetails from "./BookingsTableRowDetails";
import React from "react";
import BookingCancelButton from "./BookingCancelButton";

const BookingsTableRow = (props: {id: number, booking: BookingInterface}) => {
    return (
        <tr>
            <td >{props.id + 1}</td>
            <td>{props.booking.user.lastName}</td>
            <td>{props.booking.user.firstName}</td>
            <td>{props.booking.bookableType}</td>
            <td><BookingsTableRowDetails booking={props.booking}/></td>
            <td><BookingCancelButton booking={props.booking}/></td>
        </tr>
    );
}

export default BookingsTableRow;