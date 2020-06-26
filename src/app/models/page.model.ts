export interface Page<T> {
    total_count: number;
    incomplete_results: boolean;
    items: T[];
    previousPageNumber: number;
    nextPageNumber: number;
}