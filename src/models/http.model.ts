export interface IResult<T> {
    // Code
    code: number;
    // Message
    message: string;
    // Data
    data: T;
}
