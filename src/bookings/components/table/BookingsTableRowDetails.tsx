import {BookingInterface} from "../../interfaces/bookingInterface";
import {dateToString} from "../../../common/utils/dateToString";
import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import BookingDetailsModal from "./BookingDetailsModal";
import {CarInterface} from "../../interfaces/car/CarInterface";
import CarDetailsModal from "../modals/CarDetailsModal";
import {FlatInterface} from "../../interfaces/flat/FlatInterface";
import FlatDetailsModal from "../modals/FlatDetailsModal";
import ParkDetailsModal from "../modals/ParkDetailsModal";
import {ParkInterface} from "../../interfaces/park/ParkInterface";

const BookingsTableRowDetails = (props: {booking: BookingInterface}) => {
    const [modalShow, setModalShow] = useState(false);
    const [car, setCar] = useState<CarInterface>();
    const [flat, setFlat] = useState<FlatInterface>();
    const [park, setPark] = useState<ParkInterface>();

    useEffect(() => {
        const baseUrl = process.env.REACT_APP_BOOKLY_BACKEND_URL;
        let endpointUrl;

        switch (props.booking.bookableType.toString()) {
            case 'CAR':
                endpointUrl = `/cars/${props.booking.itemExternalId}`;
                fetch(baseUrl + endpointUrl, {
                        method: "GET",
                        mode: 'cors'
                    }
                ).then(async (response) => {
                    if (!response.ok)
                        throw Error(response.statusText);
                    const car = await response.json();
                    setCar(car);
                }).catch((error) => {
                    console.log(error);
                });
                break;
            case 'FLAT':
                endpointUrl = `/flats/${props.booking.itemExternalId}`;
                fetch(baseUrl + endpointUrl, {
                        method: "GET",
                        mode: 'cors'
                    }
                ).then(async (response) => {
                    if (!response.ok)
                        throw Error(response.statusText);
                    const flat = await response.json();
                    setFlat(flat);
                }).catch((error) => {
                    console.log(error);
                });
                break;
            case 'PARK':
                endpointUrl = `/parks/${props.booking.itemExternalId}`;
                fetch(baseUrl + endpointUrl, {
                        method: "GET",
                        mode: 'cors'
                    }
                ).then(async (response) => {
                    if (!response.ok)
                        throw Error(response.statusText);
                    const park = await response.json();
                    setPark(park);
                }).catch((error) => {
                    console.log(error);
                });
                break;
            default:
                break;
        }
    }, []);

    function getModal() {
        switch(props.booking.bookableType.toString()) {
            case 'CAR':
               return <CarDetailsModal booking={props.booking} car={car!} show={modalShow} onHide={() => setModalShow(false)} />
            case 'FLAT':
                return <FlatDetailsModal booking={props.booking} flat={flat!} show={modalShow} onHide={() => setModalShow(false)} />
            case 'PARK':
                return <ParkDetailsModal booking={props.booking} park={park!} show={modalShow} onHide={() => setModalShow(false)} />
            default:
                return <BookingDetailsModal booking={props.booking} show={modalShow} onHide={() => setModalShow(false)}/>
        }
    }

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
            {getModal()}
        </div>
    )
}

export default BookingsTableRowDetails;