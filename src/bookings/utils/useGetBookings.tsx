import {FetcherReturnInterface} from "../../common/utils/fetcherReturnInterface";
import {useEffect, useState} from "react";
import {BookingInterface} from "../interfaces/bookingInterface";
import {BookingFiltersInterface} from "../interfaces/bookingFiltersInterface";
import {GetBookingsArgsInterface} from "../interfaces/getBookingsArgsInterface";
import {useRecoilValue} from "recoil";
import {refreshAtom} from "../../common/recoil/refreshAtom";

const useGetBookings = (args: GetBookingsArgsInterface) => {

    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState<BookingInterface[]>([]);
    const refresh = useRecoilValue(refreshAtom);

    const baseUrl = process.env.REACT_APP_BOOKLY_BACKEND_URL;
    const endpointUrl = `/bookings?page=${args.pageContext.currentPage}&pageSize=${args.pageContext.pageSize}`;
    const filters: BookingFiltersInterface = args.filters;

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
        [args.pageContext.currentPage, filters, refresh])

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

export default  useGetBookings;