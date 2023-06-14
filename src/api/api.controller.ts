import { Body, Controller, Get, Post } from '@nestjs/common';
import { TweetService } from 'src/module/tweets/tweets.service';

@Controller('api')
export class ApiController {
  constructor(private tweetService: TweetService) {}

  @Post('tweet/create')
  async createTweet(@Body() data: { content: string; userId: string }) {
    const { content, userId } = data;
    console.log(content, userId);
    return this.tweetService.createTweet({
      content: content,
      userId: Number(userId),
    });
  }

  @Get('tweets')
  async getTweet() {
    return this.tweetService.getTweet();
  }
}
