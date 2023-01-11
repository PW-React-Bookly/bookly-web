import {BookingType} from "./BookingInterface";

export interface BookingFilters {
    bookingType?: BookingType,
    firstNameQuery?: string,
    lastNameQuery?: string
}