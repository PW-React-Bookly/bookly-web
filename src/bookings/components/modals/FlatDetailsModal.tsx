import {BookingInterface} from "../../interfaces/bookingInterface";
import React from "react";
import {Button, Modal} from "react-bootstrap";
import {dateToString} from "../../../common/utils/dateToString";
import {FlatInterface} from "../../interfaces/flat/FlatInterface";

const FlatDetailsModal = (props: {booking: BookingInterface, flat: FlatInterface, onHide: () => void, show: boolean}) => {

    return (
        <div>
            <Modal show={props.show} onHide={props.onHide}
                   size="lg"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.flat?.address} {props.flat?.town}</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <h4>Booking details</h4>
                    <p>From: {dateToString(props.booking.bookedFrom)}</p>
                    <p>To: {dateToString(props.booking.bookedUntil)}</p>
                    <p>Price: {props.booking.totalPrice}$</p>

                    <h4>Flat details</h4>
                    <ul>
                        <li>Capacity: {props.flat?.capacity}</li>
                        <li>Rooms: {props.flat?.rooms}</li>
                        <li>Day price: {props.flat?.price}$</li>
                        <li>Area: {props.flat?.footage}</li>
                        <li>Country: {props.flat?.country}</li>
                        <li>Description: {props.flat?.description}</li>
                        <li>Contact info: {props.flat?.contactInfo}</li>
                    </ul>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default FlatDetailsModal;