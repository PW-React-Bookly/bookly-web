import {UserInterface} from "../interfaces/userInterface";
import {FetcherReturnInterface} from "../../common/utils/fetcherReturnInterface";
import {useEffect, useState} from "react";
import {GetUserArgsInterface} from "../interfaces/getUserArgsInterface";

const useGetUsers = (args: GetUserArgsInterface) => {

    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState<UserInterface[]>([]);

    const baseUrl = process.env.REACT_APP_BOOKLY_BACKEND_URL;
    const endpointUrl = `/users?page=${args.currentPage}&size=${args.pageSize}`;
    const fetchUrl = baseUrl + endpointUrl;

    useEffect(() =>
        {
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
        [args.currentPage])

    const result: FetcherReturnInterface ={
        data: data,
        isLoading: isLoading, isSuccess: isSuccess, error: error
    }

    return result;
}

export default  useGetUsers;