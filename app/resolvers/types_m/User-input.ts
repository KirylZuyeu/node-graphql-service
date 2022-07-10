import { InputType, Field } from 'type-graphql';
import { IsEmail } from 'class-validator';
import { User } from '../../entities_m/User';

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
}
