import { InputType, Field } from 'type-graphql';
import { Genre } from '../../entities_m/Genre';

@InputType()
export class GenreInput implements Partial<Genre> {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  description: string
  
  @Field()
  country: string
  
  @Field()
  year: number
}
