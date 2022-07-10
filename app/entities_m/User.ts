import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

@ObjectType({ description: 'The User' })
export class User {
  [x: string]: any;
  @Field(() => ID)
  id: string;

  @Field()
  @Property()
  firstName: String;

  @Field()
  @Property()
  lastName: String;

  @Field()
  @Property()
  password: String;

  @Field()
  @Property({ required: true })
  email: String;
}

export const UserModel = getModelForClass(User);
