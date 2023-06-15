import { Module } from '@nestjs/common';
import { TweetsRepository } from './tweets.respository';
import { PrismaModule } from '../../prisma/prisma.module';
import { TweetService } from './tweets.service';

@Module({
  imports: [PrismaModule],
  providers: [TweetsRepository, TweetService],
  exports: [TweetService], //use in API layer
})
export class TweetsModule {}
