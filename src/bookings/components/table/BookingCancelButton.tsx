import {Button} from "react-bootstrap";
import React from "react";
import {BookingInterface} from "../../interfaces/bookingInterface";

const BookingCancelButton = (props: {booking: BookingInterface}) => {

    const handleBookingCancel = () => {
        throw new Error(`Not implemented, bookingId: ${props.booking.id}`);
    }

    return (
        <Button
            onClick={handleBookingCancel}
            style={{height: "50%"}}
            variant='outline-danger'
        >
            Cancel
        </Button>
    );
}

export default BookingCancelButton;