import {Button} from "react-bootstrap";
import React from "react";
import {BookingInterface} from "../../interfaces/bookingInterface";
import {useRecoilState} from "recoil";
import {refreshAtom} from "../../../common/recoil/refreshAtom";

const BookingCancelButton = (props: {booking: BookingInterface}) => {

    const [_, setRefresh] = useRecoilState(refreshAtom);

    const handleBookingCancel = () => {
        const baseUrl = process.env.REACT_APP_BOOKLY_BACKEND_URL;
        const endpointUrl = `/bookings/cancel/${props.booking.id}`;
        const url = baseUrl + endpointUrl;

        fetch(url, {
            method : "POST",
            mode: 'cors',
        })
            .then(() => {
                setRefresh(Date.now());
            })
            .catch((error) => console.error(error));
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