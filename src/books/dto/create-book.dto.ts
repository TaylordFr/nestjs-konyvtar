import { IsISBN, IsNotEmpty, IsString } from "class-validator";

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsISBN()
  isbn: string;

  @IsString()
  @IsNotEmpty()
  publishYear: number;

}
