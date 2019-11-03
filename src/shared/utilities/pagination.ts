export interface Pagination {
    skip: number;
    limit: number;
}

export interface FindOption {
    filter?: any;
    sort?: any;
    pagination?: Pagination;
}
