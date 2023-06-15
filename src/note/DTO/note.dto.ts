// export type Note = {
//     id: number
//     title: string
//     descrtiption: string
//     url: string
//     createdAt: Date
//     updatedAt: Date
//     userId: number
//   }

import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AddNoteDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  url: string;
}

export class UpdateNoteDTO {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  url: string;
}
