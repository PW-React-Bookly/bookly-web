import Fetcher from "../../common/components/Fetcher";
import {useContext, useEffect, useState} from "react";
import {PaginationContext} from "../../common/components/PaginationWrapper";
import useGetBookings from "../utils/useGetBookings";
import {BookingInterface} from "../interfaces/bookingInterface";
import {BookingFiltersInterface} from "../interfaces/bookingFiltersInterface";

const BookingsFetcher = (props : {children: (data:any[])=>JSX.Element, filters: BookingFiltersInterface}) => {

    const pageContext = useContext(PaginationContext);
    const [localFilters, setLocalFilters] = useState(props.filters);
    useEffect(() => {
        pageContext.jumpPage(0);
        setLocalFilters(props.filters);
    }, [props.filters]);

    return (
        <Fetcher fetcher={useGetBookings} args={{pageContext: pageContext, filters: localFilters}}>
            {(data: BookingInterface[]) =>
                props.children(data)
            }
        </Fetcher>
    )
}

export default BookingsFetcher;