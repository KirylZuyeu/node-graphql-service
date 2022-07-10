import { InputType, Field } from 'type-graphql';
import { Band } from '../../entities_m/Band';
import { ObjectId } from 'mongodb';

@InputType()
export class BandInput implements Partial<Band> {
  @Field()
  name: string

  @Field()
  origin: string

  @Field()
  website: string

  @Field(() => String)
  genres: ObjectId;
}
