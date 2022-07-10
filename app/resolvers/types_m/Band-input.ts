import { InputType, Field } from 'type-graphql';
import { Band } from '../../entities_m/Band';

@InputType()
export class BandInput implements Partial<Band> {
  @Field()
  name: String

  @Field()
  origin: String

  @Field()
  members: [Member]

  @Field()
  website: String

  @Field()
  genres: [Genre]
}
