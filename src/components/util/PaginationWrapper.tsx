import React, {useState} from "react";
import {Pagination} from "react-bootstrap";
import {PaginationContextInterface} from "../../utils/interfaces/paginationContextInterface";

const defaultPageSize = 10;
export const PaginationContext = React.createContext<PaginationContextInterface>({currentPage: 1, pageSize: defaultPageSize});

const PaginationWrapper = (props : {children: React.ReactNode}) => {

    const [pageContext, setPageContext] = useState<PaginationContextInterface>({currentPage: 1, pageSize: defaultPageSize});

    const previousPage = () => {
        setPageContext((prev)=>({...prev, currentPage: prev.currentPage-1}));
    }
    const nextPage = () => {
        setPageContext((prev)=>({...prev, currentPage: prev.currentPage+1}));
    }
    const jumpPage = (pageId: number) => {
        setPageContext((prev)=>({...prev, currentPage: pageId}));
    }

    return (
        <div>
            <PaginationContext.Provider value={pageContext}>
                {props.children}
            </PaginationContext.Provider>
            <Pagination>
                {pageContext.currentPage > 1 &&
                    <>
                        <Pagination.First  onClick={()=>jumpPage(1)} />
                        <Pagination.Prev  onClick={previousPage}/>
                    </>}
                {pageContext.currentPage >= 4 &&
                    <>
                        <Pagination.Item onClick={()=>jumpPage(1)}>{1}</Pagination.Item>
                        <Pagination.Ellipsis />
                    </>}

                {pageContext.currentPage < 3 ?
                    <>
                        <Pagination.Item active={pageContext.currentPage == 1} onClick={() => jumpPage(1)}>{1}</Pagination.Item>
                        <Pagination.Item active={pageContext.currentPage == 2} onClick={() => jumpPage(2)}>{2}</Pagination.Item>
                        <Pagination.Item active={pageContext.currentPage > 2} onClick={() => jumpPage(3)}>{3}</Pagination.Item>
                        <Pagination.Item onClick={() => jumpPage(4)}>{4}</Pagination.Item>
                        <Pagination.Item onClick={() => jumpPage(5)}>{5}</Pagination.Item>
                    </>:
                    <>
                        <Pagination.Item onClick={()=>jumpPage(pageContext.currentPage-2)}>{pageContext.currentPage-2}</Pagination.Item>
                        <Pagination.Item onClick={() => jumpPage(pageContext.currentPage-1)}>{pageContext.currentPage-1}</Pagination.Item>
                        <Pagination.Item active>{pageContext.currentPage}</Pagination.Item>
                        <Pagination.Item onClick={() => jumpPage(pageContext.currentPage+1)}>{pageContext.currentPage+1}</Pagination.Item>
                        <Pagination.Item onClick={() => jumpPage(pageContext.currentPage+2)}>{pageContext.currentPage+2}</Pagination.Item>
                    </>
                }
                <Pagination.Next onClick={nextPage} />
            </Pagination>
        </div>
    );
}

export default PaginationWrapper;
