import BookingsTable from "./BookingsTable";
import PaginationWrapper from "../util/PaginationWrapper";
import {BookingInterface} from "../../utils/interfaces/BookingInterface";
import SearchPanel from "./search/SearchPanel";
import BookingsFetcher from "./BookingsFetcher";
import {useState} from "react";
import {BookingFilters} from "../../utils/interfaces/BookingFilters";

const BookingsPage = () => {

    const [filters, setFilters] = useState<BookingFilters>({});

    const handleSearch = (newFilters: BookingFilters) => {
        setFilters(newFilters);
    }
    return (
        <div>
            <SearchPanel setFilters={handleSearch}/>
            <PaginationWrapper>
                <BookingsFetcher filters={filters}>
                    {(data: BookingInterface[]) =>
                        <BookingsTable data={data}/>
                    }
                </BookingsFetcher>
            </PaginationWrapper>
        </div>
    )
}

export default BookingsPage;