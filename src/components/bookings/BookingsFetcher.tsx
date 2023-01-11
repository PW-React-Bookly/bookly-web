import Fetcher from "../util/Fetcher";
import {useContext} from "react";
import {PaginationContext} from "../util/PaginationWrapper";
import useGetPaginatedBookings from "../../utils/fetchers/useGetPaginatedBookings";
import {BookingInterface} from "../../utils/interfaces/BookingInterface";

const BookingsFetcher = (props : {children: (data:any[])=>JSX.Element}) => {

    const pageContext = useContext(PaginationContext);
    return (
        <Fetcher fetcher={useGetPaginatedBookings} args={pageContext}>
            {(data: BookingInterface[]) =>
                props.children(data)
            }
        </Fetcher>
    )
}

export default BookingsFetcher;