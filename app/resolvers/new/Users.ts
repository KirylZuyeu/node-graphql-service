import {
    Resolver,
    Mutation,
    Arg,
    Query
  } from 'type-graphql';
  import { User, UserModel } from '../../entities_m/User';
  import { UserInput } from '../types_m/User-input';
  
  @Resolver((_of) => User)
  export class UsersResolver {
    @Query((_returns) => User, { nullable: false })
    async getUserById(@Arg('id') id: string) {
      return await UserModel.findById({ _id: id });
    }
  
    @Query(() => [User])
    async getAllUsers() {
      return await UserModel.find();
    }
  
    @Mutation(() => User)
    async registerUser(
      @Arg('data') { firstName, lastName, password, email}: UserInput
    ): Promise<User> {
      const user = (
        await UserModel.create({
          firstName,
          lastName,
          password,
          email
        })
      ).save();
      return user;
    }
  }
  