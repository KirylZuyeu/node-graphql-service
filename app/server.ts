import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import Express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { connect } from 'mongoose';

import { UserResolver } from './resolvers/User';
import { ProductResolver } from './resolvers/Product';
import { CategoriesResolver } from './resolvers/Categories';
import { CartResolver } from './resolvers/Cart';
import { OrderResolver } from './resolvers/Order';

import { UsersResolver } from './resolvers/new/Users';
import { GenresResolver } from './resolvers/new/Genres';
import { ArtistsResolver } from './resolvers/new/Artists';
import { BandsResolver } from './resolvers/new/Bands';
import { TracksResolver } from './resolvers/new/Tracks';
import { FavouritesResolver } from './resolvers/new/Favourites';
import { AlbumsResolver } from './resolvers/new/Albums';



const main = async () => {
  const schema = await buildSchema({
    resolvers: [
      CategoriesResolver,
      ProductResolver,
      UserResolver,
      CartResolver,
      OrderResolver,

      UsersResolver,
      GenresResolver,
      ArtistsResolver,
      BandsResolver,
      TracksResolver,
      FavouritesResolver,
      AlbumsResolver,
    ],
    emitSchemaFile: true,
    validate: false,
  });

  // create mongoose connection
  const mongoose = await connect('mongodb://localhost:27017/test');
  await mongoose.connection;

  const server = new ApolloServer({
    schema,
    plugins: [ ApolloServerPluginLandingPageGraphQLPlayground ],
  });

  const app = Express();

  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port: 3333 }, () =>
    console.log(
      `🚀 Server ready and listening at ==> http://localhost:3333${server.graphqlPath}`
    )
  );
};

main().catch((error) => {
  console.log(error, 'error');
});
