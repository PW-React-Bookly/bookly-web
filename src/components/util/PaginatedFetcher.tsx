import React, {useContext} from "react";
import {PaginatedFetcherInterface} from "../../utils/interfaces/paginatedFetcherInterface";
import {PaginationContext} from "./PaginationWrapper";
import {Spinner} from "react-bootstrap";
import SomethingWentWrong from "../SomethingWentWrong";

const PaginatedFetcher = (props : {children: (data:any[])=>JSX.Element, paginatedFetcher: PaginatedFetcherInterface}) => {

    const pageContext = useContext(PaginationContext);
    const {
        data,
        isLoading,
        isSuccess,
        error
    } = props.paginatedFetcher({requestedPage: pageContext.currentPage, pageSize: pageContext.pageSize});

    return (
        <div>
            {isLoading?
                <Spinner animation="grow" />:
                isSuccess?
                    props.children(data):
                    <SomethingWentWrong error={error}/>
            }

        </div>
    );
}

export default PaginatedFetcher;
