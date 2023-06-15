import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Tweet } from '../tweets/tweets.model';
import { TweetService } from '../tweets/tweets.service';
import { TweetResolver } from '../tweet.resolver';

@Resolver()
export class ApiResolver {
  constructor(private tweetService: TweetService) {}

  @Query(() => [Tweet])
  async getTweets() {
    return this.tweetService.getTweet();
  }

  @Mutation(() => Tweet)
  async createTweet(
    @Args({ name: `content`, type: () => String }) content: string,
    @Args({ name: `userId`, type: () => String }) userId: number,
    @Args({ name: `title`, type: () => String }) title: string,
  ) {
    return this.tweetService.createTweet({ content, userId, title });
  }
}
