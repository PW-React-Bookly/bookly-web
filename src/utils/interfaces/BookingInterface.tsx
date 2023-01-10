import {UserInterface} from "./UserInterface";

export enum BookingType {
    Flat,
    Car,
    Park
}

export interface BookingInterface {
    user: UserInterface,
    bookingType: BookingType,
    dateFrom: Date,
    dateTo: Date,
    price: number
}