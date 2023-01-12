import {UserInterface} from "../interfaces/UserInterface";
import {FetcherReturnInterface} from "../interfaces/fetcherReturnInterface";
import {useEffect, useState} from "react";
import {BookingInterface, BookableType} from "../interfaces/BookingInterface";
import {BookingFilters} from "../interfaces/BookingFilters";

const useGetPaginatedBookings = (args: any) => {

    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState<BookingInterface[]>([]);

    const baseUrl = process.env.REACT_APP_BOOKLY_BACKEND_URL;
    const endpointUrl = `/bookings?page=${args.pageContext.currentPage - 1}&pageSize=${args.pageContext.pageSize}`;
    const filters: BookingFilters = args.filters;

    useEffect(() =>
        {
            setIsLoading(true);
            fetch(buildUrl(),{
                    method : "GET",
                    mode: 'cors'
                }
            ).then(async (response) => {
                if (!response.ok)
                    throw Error(response.statusText);
                const bookings: BookingInterface[] = await response.json();
                setData(bookings);
                setIsSuccess(true);
                setIsLoading(false);
            }).catch((error) => {
                setError(error.toString());
                setIsLoading(false);
            });
        },
        [args.requestedPage, filters])

    const buildUrl = () => {
        let url = baseUrl + endpointUrl;
        if (filters.firstName != undefined && filters.firstName != "") {
            url+=`&firstName=${filters.firstName}`
        }
        if (filters.lastName != undefined && filters.lastName != "") {
            url+=`&lastName=${filters.lastName}`
        }
        if (filters.bookableType != undefined) {
            url+=`&bookableType=${filters.bookableType}`
        }
        return url;
    }

    const result: FetcherReturnInterface ={
        data: data,
        isLoading: isLoading, isSuccess: isSuccess, error: error
    }

    return result;
}

export default  useGetPaginatedBookings;