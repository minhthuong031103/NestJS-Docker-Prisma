import { Module } from '@nestjs/common';
import { TweetsModule } from './tweets/tweets.module';
import { ApiModule } from './api/api.module';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { TweetResolver } from './tweet.resolver';
import { AuthModule } from './auth/auth.module';

import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    TweetsModule,
    ApiModule,

    AuthModule,

    UserModule,

    NoteModule,
  ],
  controllers: [],
  providers: [TweetResolver],
})
export class AppModule {}
