export interface PaginationContextInterface {
    currentPage: number,
    pageSize: number,
    jumpPage: (page: number) => void
}