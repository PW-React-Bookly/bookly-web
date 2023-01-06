import {FetcherReturnInterface} from "./fetcherReturnInterface";
import {PaginatedFetcherArgs} from "./paginatedFetcherArgs";

export interface PaginatedFetcherInterface {
    (args: PaginatedFetcherArgs): FetcherReturnInterface
}