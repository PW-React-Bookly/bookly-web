import {BookingInterface} from "../../utils/interfaces/BookingInterface";
import {dateToString} from "../../utils/interfaces/DateToString";
import React, {useState} from "react";
import {Button} from "react-bootstrap";
import BookingDetailsModal from "./BookingDetailsModal";

const BookingsTableRowDetails = (props: {booking: BookingInterface}) => {
    const [modalShow, setModalShow] = useState(false);

    const buttonStyle = {
        display: 'flex',
        gap: 30
    }
    return (
        <div>
            <div style={buttonStyle}>
                <div>
                    <p>Period: {dateToString(props.booking.bookedFrom)} - {dateToString(props.booking.bookedUntil)}</p>
                    <p>Price: {props.booking.totalPrice}$</p>
                </div>
                <Button onClick={() => setModalShow(true)} style={{height: "50%"}}>
                    See More
                </Button>
            </div>
            <BookingDetailsModal booking={props.booking} show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
    )
}

export default BookingsTableRowDetails;