import {BookingInterface} from "../../interfaces/bookingInterface";
import React from "react";
import {Button, Modal} from "react-bootstrap";
import {dateToString} from "../../../common/utils/dateToString";
import {ParkInterface} from "../../interfaces/park/ParkInterface";

const FlatDetailsModal = (props: {booking: BookingInterface, park: ParkInterface, onHide: () => void, show: boolean}) => {

    return (
        <div>
            <Modal show={props.show} onHide={props.onHide}
                   size="lg"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.park?.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <h4>Booking details</h4>
                    <p>From: {dateToString(props.booking.bookedFrom)}</p>
                    <p>To: {dateToString(props.booking.bookedUntil)}</p>
                    <p>Price: {props.booking.totalPrice}$</p>

                    <h4>Parking lot details</h4>
                    <ul>
                        <li>Capacity: {props.park?.capacity}</li>
                        <li>Price per day: {props.park?.pricePerDay}$</li>
                        <li>Security: {props.park?.security ? 'Yes' : 'No'}</li>
                        <li>Latitude: {props.park?.latitude}</li>
                        <li>Longitude: {props.park?.longitude}</li>
                        <li>Parking type: {props.park?.parkingLotType}</li>
                        <li>Description: {props.park?.description}</li>
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