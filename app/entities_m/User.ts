import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

@ObjectType({ description: 'The User' })
export class User {
  [x: string]: any;
  @Field(() => ID)
  id: string;

  @Field()
  @Property()
  firstName: string;

  @Field()
  @Property()
  lastName: string;

  @Field()
  @Property()
  password: string;

  @Field()
  @Property({ required: true })
  email: string;
}

export const UserModel = getModelForClass(User);
