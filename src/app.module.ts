import { Module } from '@nestjs/common';
import { TweetsModule } from './module/tweets/tweets.module';
import { ApiModule } from './api/api.module';
import { PrismaModule } from 'prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { TweetResolver } from './tweet.resolver';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    TweetsModule,
    ApiModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [TweetResolver],
})
export class AppModule {}
