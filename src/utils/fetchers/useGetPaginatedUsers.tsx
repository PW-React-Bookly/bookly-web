import {UserInterface} from "../interfaces/UserInterface";
import {FetcherReturnInterface} from "../interfaces/fetcherReturnInterface";
import {useEffect, useState} from "react";

// ATENCIÓN!
// This is a mock implementation to be substituted for the real thing

const useGetPaginatedUsers = (args: any) => {

    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState<UserInterface[]>([]);

    const baseUrl = process.env.REACT_APP_BOOKLY_BACKEND_URL;
    const endpointUrl = `/users?page=${args.currentPage}&pageSize=${args.pageSize}`;
    const fetchUrl = baseUrl + endpointUrl;

    useEffect(() =>
        {
            console.log(baseUrl);
            setIsLoading(true);
            fetch(fetchUrl,{
                method : "GET",
                mode: 'cors'
            }
            ).then(async (response) => {
                if (!response.ok)
                    throw Error(response.statusText);
                const users: UserInterface[] = await response.json();
                setData(users);
                setIsSuccess(true);
                setIsLoading(false);
            }).catch((error) => {
                setError(error.toString());
                setIsLoading(false);
            });
        },
        [args.requestedPage])

    const result: FetcherReturnInterface ={
        data: data,
        isLoading: isLoading, isSuccess: isSuccess, error: error
    }

    return result;
}

export default  useGetPaginatedUsers;