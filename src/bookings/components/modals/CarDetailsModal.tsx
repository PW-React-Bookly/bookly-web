import {BookingInterface} from "../../interfaces/bookingInterface";
import React from "react";
import {CarInterface} from "../../interfaces/car/CarInterface";
import {Button, Modal} from "react-bootstrap";
import {dateToString} from "../../../common/utils/dateToString";

const CarDetailsModal = (props: {booking: BookingInterface, car: CarInterface, onHide: () => void, show: boolean}) => {

    return (
        <div>
            <Modal show={props.show} onHide={props.onHide}
                   size="lg"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.car?.model.brand.name + " " + props.car?.model.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <h4>Booking details</h4>
                    <p>From: {dateToString(props.booking.bookedFrom)}</p>
                    <p>To: {dateToString(props.booking.bookedUntil)}</p>
                    <p>Price: {props.booking.totalPrice}$</p>

                    <h4>Car details</h4>
                    <ul>
                        <li>Model: {props.car?.model.brand.name + " " + props.car?.model.name + " (" + props.car?.model.productionYear + ")"}</li>
                        <li>Type: {props.car?.model.carType}</li>
                        <li>Day price: {props.car?.dayPrice}$</li>
                        <li>Fuel type: {props.car?.model.fuelType}</li>
                        <li>Mileage: {props.car?.mileage} km</li>
                        <li>Automatic gearbox: {props.car?.model.isGearBoxAutomatic ? "Yes" : "No" }</li>
                        <li>Number of seats: {props.car?.model.numberOfSeats}</li>
                        <li>Number of doors: {props.car?.model.numberOfDoors}</li>
                        <li>Trunk capacity: {props.car?.model.trunkCapacity}</li>
                        <li>Horse power: {props.car?.model.horsePower}</li>
                        <li>Avg. fuel consumption: {props.car?.model.avgFuelConsumption}l per 100 km</li>
                        <li>Color: {props.car?.color}</li>
                        <li>Equipment: {props.car?.equipment.join(', ')}</li>
                    </ul>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CarDetailsModal;