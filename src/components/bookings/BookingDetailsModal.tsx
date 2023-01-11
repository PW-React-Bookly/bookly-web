import {Button, Modal} from "react-bootstrap";
import {BookingInterface} from "../../utils/interfaces/BookingInterface";
import {dateToString} from "../../utils/interfaces/DateToString";
import React from "react";

const BookingDetailsModal = (props: {booking: BookingInterface, onHide: () => void, show: boolean}) => {
    return (
        <div>
            <Modal show={props.show} onHide={props.onHide}
                   size="lg"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>VolksWagen golf 4</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <h4>Booking period</h4>
                    <p>From: {dateToString(props.booking.dateFrom)}</p>
                    <p>To: {dateToString(props.booking.dateTo)}</p>

                    <h4>Details</h4>
                    <p>Price: {props.booking.price}$</p>

                    <h4>Description</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BookingDetailsModal;