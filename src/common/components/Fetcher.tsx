import React from "react";
import {FetcherInterface} from "../utils/fetcherInterface";
import {Spinner} from "react-bootstrap";
import SomethingWentWrong from "./SomethingWentWrong";

const Fetcher = (props : {children: (data:any[])=>JSX.Element, fetcher: FetcherInterface, args: any}) => {

    const {
        data,
        isLoading,
        isSuccess,
        error
    } = props.fetcher(props.args);

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

export default Fetcher;
