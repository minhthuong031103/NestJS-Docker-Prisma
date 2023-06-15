import { Injectable } from '@nestjs/common';
import { TweetsRepository } from './tweets.respository';
import { Tweet, User } from '@prisma/client';

@Injectable()
export class TweetService {
  constructor(private tweetRepository: TweetsRepository) {}

  async createTweet(params: {
    content: Tweet[`content`];
    userId: User[`id`];
    title: Tweet[`title`];
  }) {
    const { content, userId, title } = params;
    const tweet = await this.tweetRepository.createTweet({
      data: {
        title,
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
