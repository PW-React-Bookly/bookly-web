import {Button, Dropdown, DropdownButton, Form, InputGroup} from "react-bootstrap";
import React, {useState} from "react";
import {BookingType} from "../../../utils/interfaces/BookingInterface";

const SearchPanel = () => {
    const [bookingType, setBookingType] = useState<string | null>(null);
    const [firstName, setFirstName] = useState<string | null>(null);
    const [lastName, setLastName] = useState<string | null>(null);

    const handleSelect = (e: any) => {
        setBookingType(e);
    }
    return (
        <div>
            <Form className="w-25 m-3">
                <div className="d-flex flex-row mb-3">
                    <Form.Group className="me-2 flex-fill">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="Enter first name" onChange={e => setFirstName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="me-2 flex-fill">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Enter last name" onChange={e => setLastName(e.target.value)}/>
                    </Form.Group>
                </div>

                <div className="d-flex flex-row mb-3">
                    <div className="me-2">
                        <Form.Label>Booking Type</Form.Label>
                        <InputGroup>
                            <DropdownButton
                                variant="outline-secondary"
                                title={bookingType != null? bookingType : "Select type"}
                                id="input-group-dropdown-1"
                                onSelect={handleSelect}>
                                <Dropdown.Item eventKey={BookingType[BookingType.Flat]}>
                                    {BookingType[BookingType.Flat]}
                                </Dropdown.Item>
                                <Dropdown.Item eventKey={BookingType[BookingType.Car]}>
                                    {BookingType[BookingType.Car]}
                                </Dropdown.Item>
                                <Dropdown.Item eventKey={BookingType[BookingType.Park]}>
                                    {BookingType[BookingType.Park]}
                                </Dropdown.Item>
                            </DropdownButton>
                            <Button
                                variant="outline-secondary"
                                onClick={() => setBookingType(null)}>
                                Clear
                            </Button>
                        </InputGroup>
                    </div>
                    <Button variant="primary" className="ms-auto align-self-end me-2 mb-2">
                        Search
                    </Button>
                </div>

            </Form>
        </div>
    )
}

export default SearchPanel;