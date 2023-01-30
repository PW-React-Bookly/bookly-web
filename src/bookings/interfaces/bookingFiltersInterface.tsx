import {BookableType} from "./bookingInterface";

export interface BookingFiltersInterface {
    bookableType?: BookableType,
    firstName?: string,
    lastName?: string
    sort?: string;
}