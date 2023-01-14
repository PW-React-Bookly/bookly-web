import Fetcher from "../util/Fetcher";
import {useContext, useEffect, useState} from "react";
import {PaginationContext} from "../util/PaginationWrapper";
import useGetPaginatedBookings from "../../utils/fetchers/useGetPaginatedBookings";
import {BookingInterface} from "../../utils/interfaces/BookingInterface";
import {BookingFilters} from "../../utils/interfaces/BookingFilters";

const BookingsFetcher = (props : {children: (data:any[])=>JSX.Element, filters: BookingFilters}) => {

    const pageContext = useContext(PaginationContext);
    const [localFilters, setLocalFilters] = useState(props.filters);
    useEffect(() => {
        setLocalFilters(props.filters);
    }, [props.filters]);

    return (
        <Fetcher fetcher={useGetPaginatedBookings} args={{pageContext: pageContext, filters: localFilters}}>
            {(data: BookingInterface[]) =>
                props.children(data)
            }
        </Fetcher>
    )
}

export default BookingsFetcher;