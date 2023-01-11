import BookingsTable from "./BookingsTable";
import PaginatedFetcher from "../util/PaginatedFetcher";
import PaginationWrapper from "../util/PaginationWrapper";
import {BookingInterface} from "../../utils/interfaces/BookingInterface";
import useGetPaginatedBookings from "../../utils/fetchers/useGetPaginatedBookings";
import SearchPanel from "./search/SearchPanel";

const BookingsPage = () => {

    return (
        <div>
            <SearchPanel/>
            <PaginationWrapper>
                <PaginatedFetcher paginatedFetcher={useGetPaginatedBookings}>
                    {(data: BookingInterface[]) =>
                        <BookingsTable data={data}/>
                    }
                </PaginatedFetcher>
            </PaginationWrapper>
        </div>
    )
}

export default BookingsPage;