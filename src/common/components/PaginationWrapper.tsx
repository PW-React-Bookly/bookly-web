import React, {useState} from "react";
import {Pagination} from "react-bootstrap";
import {PaginationContextInterface} from "../utils/paginationContextInterface";


const defaultPaginationContext: PaginationContextInterface = {currentPage: 0, pageSize: 0, jumpPage: ()=>{}}
export const PaginationContext = React.createContext<PaginationContextInterface>(defaultPaginationContext);

const PaginationWrapper = (props : {children: React.ReactNode}) => {

    const previousPage = () => {
        setPageContext((prev)=>({...prev, currentPage: prev.currentPage-1}));
    }
    const nextPage = () => {
        setPageContext((prev)=>({...prev, currentPage: prev.currentPage+1}));
    }
    const jumpPage = (pageId: number) => {
        setPageContext((prev)=>({...prev, currentPage: pageId}));
    }
    const pageToViewPage = (pageId: number) => pageId+1;

    const defaultPageSize = 10;
    const initialPaginationContext: PaginationContextInterface = {currentPage: 0, pageSize: defaultPageSize, jumpPage: jumpPage}
    const [pageContext, setPageContext] = useState<PaginationContextInterface>(initialPaginationContext);

    return (
        <div>
            <PaginationContext.Provider value={pageContext}>
                {props.children}
            </PaginationContext.Provider>
            <Pagination>
                {pageContext.currentPage > 0 &&
                    <>
                        <Pagination.Prev  onClick={previousPage}/>
                    </>}
                {pageContext.currentPage >= 3 &&
                    <>
                        <Pagination.Item onClick={()=>jumpPage(0)}>{1}</Pagination.Item>
                        <Pagination.Ellipsis />
                    </>}

                {pageContext.currentPage < 2 ?
                    <>
                        <Pagination.Item active={pageContext.currentPage == 0} onClick={() => jumpPage(0)}>{pageToViewPage(0)}</Pagination.Item>
                        <Pagination.Item active={pageContext.currentPage == 1} onClick={() => jumpPage(1)}>{pageToViewPage(1)}</Pagination.Item>
                        <Pagination.Item active={pageContext.currentPage > 3} onClick={() => jumpPage(2)}>{pageToViewPage(2)}</Pagination.Item>
                        <Pagination.Item onClick={() => jumpPage(3)}>{pageToViewPage(3)}</Pagination.Item>
                        <Pagination.Item onClick={() => jumpPage(4)}>{pageToViewPage(4)}</Pagination.Item>
                    </>:
                    <>
                        <Pagination.Item onClick={()=>jumpPage(pageContext.currentPage-2)}>{pageToViewPage(pageContext.currentPage-2)}</Pagination.Item>
                        <Pagination.Item onClick={() => jumpPage(pageContext.currentPage-1)}>{pageToViewPage(pageContext.currentPage-1)}</Pagination.Item>
                        <Pagination.Item active>{pageToViewPage(pageContext.currentPage)}</Pagination.Item>
                        <Pagination.Item onClick={() => jumpPage(pageContext.currentPage+1)}>{pageToViewPage(pageContext.currentPage+1)}</Pagination.Item>
                        <Pagination.Item onClick={() => jumpPage(pageContext.currentPage+2)}>{pageToViewPage(pageContext.currentPage+2)}</Pagination.Item>
                    </>
                }
                <Pagination.Next onClick={nextPage} />
            </Pagination>
        </div>
    );
}

export default PaginationWrapper;
