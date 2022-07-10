import { InputType, Field, ID } from 'type-graphql';
import { IsEmail } from 'class-validator';
import { User } from '../../entities/User';
import { ObjectId } from 'mongodb';

@InputType()
export class UserInput implements Partial<User> {
  @Field()
  firstName: String

  @Field()
  lastName: String

  @Field()
  password: String

  @Field()
  @IsEmail()
  email: String;

  @Field(() => ID)
  cart_id: ObjectId;
}
