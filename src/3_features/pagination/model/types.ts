export interface IPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export interface IPaginationInfoProps {
    currentPage: number;
    totalPages: number;
    totalItems?: number;
}
