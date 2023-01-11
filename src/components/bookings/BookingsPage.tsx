import BookingsTable from "./BookingsTable";
import PaginationWrapper from "../util/PaginationWrapper";
import {BookingInterface} from "../../utils/interfaces/BookingInterface";
import SearchPanel from "./search/SearchPanel";
import BookingsFetcher from "./BookingsFetcher";

const BookingsPage = () => {

    return (
        <div>
            <SearchPanel/>
            <PaginationWrapper>
                <BookingsFetcher>
                    {(data: BookingInterface[]) =>
                        <BookingsTable data={data}/>
                    }
                </BookingsFetcher>
            </PaginationWrapper>
        </div>
    )
}

export default BookingsPage;