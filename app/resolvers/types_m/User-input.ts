import { InputType, Field } from 'type-graphql';
import { IsEmail } from 'class-validator';
import { User } from '../../entities_m/User';

@InputType()
export class UserInput implements Partial<User> {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  password: string;

  @Field()
  @IsEmail()
  email: string;
}
