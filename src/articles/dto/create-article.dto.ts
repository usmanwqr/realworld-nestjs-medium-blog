import { IsString } from 'class-validator';

import {
  // decorators here
  ApiProperty,
} from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty()
  @IsString()
  body: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  slug: string;

  // Don't forget to use the class-validator decorators in the DTO properties.
}