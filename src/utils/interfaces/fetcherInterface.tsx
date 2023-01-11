import {FetcherReturnInterface} from "./fetcherReturnInterface";

export interface FetcherInterface {
    (args: any): FetcherReturnInterface
}