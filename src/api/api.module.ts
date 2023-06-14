import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { TweetsModule } from 'src/module/tweets/tweets.module';
import { ApiResolver } from './api.resolver';
import { TweetResolver } from 'src/tweet.resolver';

@Module({
  imports: [TweetsModule],
  controllers: [ApiController],
  providers: [ApiResolver, TweetResolver],
})
export class ApiModule {}
