import { InputType, Field } from 'type-graphql';
import { Band } from '../../entities_m/Band';

@InputType()
export class BandInput implements Partial<Band> {
  @Field()
  name: string

  @Field()
  origin: string

  @Field()
  members: [Member]

  @Field()
  website: string

  @Field()
  genres: [Genre]
}
