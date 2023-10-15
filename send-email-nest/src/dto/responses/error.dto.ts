export class ErrorResponseDTO {
    constructor(public message: string, public error: string, public status: number) { }
}