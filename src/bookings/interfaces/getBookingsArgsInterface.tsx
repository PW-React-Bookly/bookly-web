import {PaginationContextInterface} from "../../common/utils/paginationContextInterface";
import {BookingFiltersInterface} from "./bookingFiltersInterface";

export interface GetBookingsArgsInterface {
    pageContext: PaginationContextInterface,
    filters: BookingFiltersInterface
}