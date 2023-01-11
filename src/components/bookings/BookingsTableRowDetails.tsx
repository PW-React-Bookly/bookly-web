import {BookingInterface} from "../../utils/interfaces/BookingInterface";
import {dateToString} from "../../utils/interfaces/DateToString";
import React, {useState} from "react";
import {Button} from "react-bootstrap";
import BookingDetailsModal from "./BookingDetailsModal";

const BookingsTableRowDetails = (props: {booking: BookingInterface}) => {
    const [modalShow, setModalShow] = useState(false);

    const buttonStyle = {
        display: 'flex',
        gap: 10
    }
    return (
        <div>
            <p>Period: {dateToString(props.booking.dateFrom)} - {dateToString(props.booking.dateTo)}</p>
            <div style={buttonStyle}>
                <p>Price: {props.booking.price}</p>
                <Button onClick={() => setModalShow(true)}>
                    Details
                </Button>
            </div>
            <BookingDetailsModal booking={props.booking} show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
    )
}

export default BookingsTableRowDetails;