import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { Tweet as TweetDB } from '@prisma/client';

@ObjectType()
export class Tweet {
  @Field(() => Int)
  id: TweetDB[`id`];

  @Field(() => String)
  content: TweetDB[`content`];

  @Field(() => GraphQLISODateTime)
  createdAt: TweetDB[`createdAt`];

  @Field(() => GraphQLISODateTime)
  updatedAt: TweetDB[`updatedAt`];

  @Field(() => Int)
  userId: TweetDB[`userId`];
}
