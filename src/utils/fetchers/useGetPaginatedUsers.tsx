import {UserInterface} from "../interfaces/UserInterface";
import {PaginatedFetcherArgs} from "../interfaces/paginatedFetcherArgs";
import {FetcherReturnInterface} from "../interfaces/fetcherReturnInterface";
import {useEffect, useState} from "react";

// ATENCIÓN!
// This is a mock implementation to be substituted for the real thing

const useGetPaginatedUsers = (args: PaginatedFetcherArgs) => {

    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState<UserInterface[]>([]);

    useEffect(() =>
        {
            setIsLoading(true);
            setData(args.requestedPage===1? mockUsers1: args.requestedPage===2? mockUsers2: []);
            new Promise(resolve => setTimeout(resolve, 2000)).then(
                ()=> {
                    setIsLoading(false);
                })
        },
        [args.requestedPage])

    const mockUsers1: UserInterface[] = [
        {firstName: 'Igor', lastName: 'Faliszewski', email: 'igorfaliszewski.pw.edu.pl', passwordHash: 'a9[nbfji'},
        {firstName: 'Jakub', lastName: 'Borek', email: 'jakubborek.pw.edu.pl', passwordHash: 'avm[5fdx'}
    ]
    const mockUsers2: UserInterface[] = [
        {firstName: 'Filip', lastName: 'Suchorab', email: 'filipsuchorab.pw.edu.pl', passwordHash: 'a7258vn0'},
        {firstName: 'Jakub', lastName: 'Górka', email: 'jakubgorka.pw.edu.pl', passwordHash: 'fr6dcnya'}
    ]
    const result: FetcherReturnInterface ={
        data: data,
        isLoading: isLoading, isSuccess: isSuccess, error: error
    }

    return result;
}

export default  useGetPaginatedUsers;