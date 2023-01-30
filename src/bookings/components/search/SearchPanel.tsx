import {Button, Dropdown, DropdownButton, Form, InputGroup} from "react-bootstrap";
import React, {useState} from "react";
import {BookableType} from "../../interfaces/bookingInterface";
import {BookingFiltersInterface} from "../../interfaces/bookingFiltersInterface";

const SearchPanel = (props : {setFilters: (filters: BookingFiltersInterface) => void}) => {
    const [bookableType, setBookableType] = useState<BookableType | undefined>();
    const [firstName, setFirstName] = useState<string| undefined>();
    const [lastName, setLastName] = useState<string | undefined>();
    const [sortType, setSortType] = useState<string | undefined>();

    const handleSetBookableType = (e: any) => {
        setBookableType(e);
    }

    const search = () => {
        props.setFilters({bookableType: bookableType, firstName: firstName, lastName: lastName, sort: sortType});
    }


    const sort = (sortData : string | undefined) => {
        props.setFilters({bookableType: bookableType, firstName: firstName, lastName: lastName, sort: sortData});
    }

    const handleSortPrice = () => {
        const sortData = (sortType == 'asc' || sortType == undefined) ? 'desc' : 'asc';
        setSortType(sortData);
        sort(sortData);
    }

    return (
        <div>
            <Form className="w-25 m-3">
                <div className="d-flex flex-row mb-3">
                    <Form.Group className="me-2 flex-fill">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Enter last name" onChange={e => setLastName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="me-2 flex-fill">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="Enter first name" onChange={e => setFirstName(e.target.value)}/>
                    </Form.Group>
                </div>

                <Form.Label>Booking Type</Form.Label>
                <div className="d-flex flex-row mb-3" style={{width: 600}}>
                    <div className="me-2" style={{width: 200}} >
                        <InputGroup style={{flexDirection: "row", width: 200}}>
                            <DropdownButton
                                variant="outline-secondary"
                                title={bookableType != undefined? bookableType : "Select type"}
                                id="input-group-dropdown-1"
                                onSelect={handleSetBookableType}>
                                <Dropdown.Item eventKey={BookableType[BookableType.Flat]}>
                                    {BookableType[BookableType.Flat]}
                                </Dropdown.Item>
                                <Dropdown.Item eventKey={BookableType[BookableType.Car]}>
                                    {BookableType[BookableType.Car]}
                                </Dropdown.Item>
                                <Dropdown.Item eventKey={BookableType[BookableType.Park]}>
                                    {BookableType[BookableType.Park]}
                                </Dropdown.Item>
                            </DropdownButton>
                            <Button
                                variant="outline-secondary"
                                onClick={() => setBookableType(undefined)}>
                                Clear
                            </Button>
                        </InputGroup>
                    </div>
                    <div style={{width: 400, flexDirection: "row"}}>
                        <Button style={{width: 160}} variant="secondary" onClick={handleSortPrice} className="ms-auto align-self-end me-2 mb-2">
                            {(sortType == 'asc' || sortType == undefined) ? 'Sort by Type desc.' : 'Sort by Type asc.'}
                        </Button>
                        <Button variant="primary" onClick={search} className="ms-auto align-self-end me-2 mb-2">
                            Search
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default SearchPanel;