import {BookableType} from "./BookingInterface";

export interface BookingFilters {
    bookableType?: BookableType,
    firstName?: string,
    lastName?: string
}