import { Body, Controller, Get, Post } from '@nestjs/common';
import { TweetService } from '../tweets/tweets.service';

@Controller('api')
export class ApiController {
  constructor(private tweetService: TweetService) {}

  @Post('tweet/create')
  async createTweet(
    @Body() data: { content: string; userId: string; title: string },
  ) {
    const { content, userId, title } = data;

    return this.tweetService.createTweet({
      content: content,
      userId: Number(userId),
      title: title,
    });
  }

  @Get('tweets')
  async getTweet() {
    return this.tweetService.getTweet();
  }
}
