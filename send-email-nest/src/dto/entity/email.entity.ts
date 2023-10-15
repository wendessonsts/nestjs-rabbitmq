import { IsString } from "@nestjs/class-validator";

export class Email{
    @IsString()
    email: string
}