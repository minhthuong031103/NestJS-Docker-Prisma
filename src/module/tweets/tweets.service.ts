import { Injectable } from '@nestjs/common';
import { TweetsRepository } from './tweets.respository';
import { Tweet, User } from '@prisma/client';

@Injectable()
export class TweetService {
  constructor(private tweetRepository: TweetsRepository) {}

  async createTweet(params: { content: Tweet[`content`]; userId: User[`id`] }) {
    const { content, userId } = params;
    const tweet = await this.tweetRepository.createTweet({
      data: {
        content,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    //do others things
    return tweet;
  }
  async getTweet() {
    const tweets = await this.tweetRepository.getTweet({});
    return tweets;
  }
}
