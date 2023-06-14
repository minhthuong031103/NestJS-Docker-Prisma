import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TweetResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
