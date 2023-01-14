import BookingsTable from "./table/BookingsTable";
import PaginationWrapper from "../../common/components/PaginationWrapper";
import {BookingInterface} from "../interfaces/bookingInterface";
import SearchPanel from "./search/SearchPanel";
import BookingsFetcher from "./BookingsFetcher";
import {useState} from "react";
import {BookingFiltersInterface} from "../interfaces/bookingFiltersInterface";

const BookingsPage = () => {

    const [filters, setFilters] = useState<BookingFiltersInterface>({});

    const handleSearch = (newFilters: BookingFiltersInterface) => {
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