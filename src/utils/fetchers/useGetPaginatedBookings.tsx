import {UserInterface} from "../interfaces/UserInterface";
import {FetcherReturnInterface} from "../interfaces/fetcherReturnInterface";
import {useEffect, useState} from "react";
import {BookingInterface, BookingType} from "../interfaces/BookingInterface";

const useGetPaginatedBookings = (args: any) => {

    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState<BookingInterface[]>([]);

    useEffect(() =>
        {
            setIsLoading(true);
            setData(args.currentPage===1? [mockBookings[0], mockBookings[1]]:
                args.currentPage===2 ? [mockBookings[2], mockBookings[3]]: []);
            new Promise(resolve => setTimeout(resolve, 2000)).then(
                ()=> {
                    setIsLoading(false);
                })
        },
        [args.requestedPage])

    const mockUsers1: UserInterface[] = [
        {firstName: 'Igor', lastName: 'Faliszewski', email: 'igorfaliszewski.pw.edu.pl', id: "123", isActive: true},
        {firstName: 'Jakub', lastName: 'Borek', email: 'jakubborek.pw.edu.pl', id: "qwe", isActive: true}
    ]

    const mockBookings: BookingInterface[] = [
        {
            user: mockUsers1[0],
            bookingType: BookingType.Car,
            dateFrom: new Date("2001-02-24"),
            dateTo: new Date("2002-02-24"),
            price: 9
        },
        {
            user: mockUsers1[1],
            bookingType: BookingType.Flat,
            dateFrom: new Date("2003-02-24"),
            dateTo: new Date("2004-02-24"),
            price: 18
        },
        {
            user: mockUsers1[0],
            bookingType: BookingType.Park,
            dateFrom: new Date("2005-02-24"),
            dateTo: new Date("2006-02-24"),
            price: 77.99
        },
        {
            user: mockUsers1[1],
            bookingType: BookingType.Park,
            dateFrom: new Date("2007-02-24"),
            dateTo: new Date("2008-02-24"),
            price: 123.09
        },
    ]

    const result: FetcherReturnInterface ={
        data: data,
        isLoading: isLoading, isSuccess: isSuccess, error: error
    }

    return result;
}

export default  useGetPaginatedBookings;