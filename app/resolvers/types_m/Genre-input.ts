import { InputType, Field, ID } from 'type-graphql';
import { IsEmail } from 'class-validator';
import { Genre } from '../../entities_m/Genre';

@InputType()
export class GenreInput implements Partial<Genre> {
  @Field()
  firstName: string

  @Field()
  lastName: string

  @Field()
  password: string

  @Field()
  @IsEmail()
  email: string;
}
