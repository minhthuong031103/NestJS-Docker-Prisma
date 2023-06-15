import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MyJwtGuard } from '../auth/strategy/jwt.guard';
import { Request } from 'express';
import { GetUser } from '../decorators/user.decorator';
import { User } from '@prisma/client';
@Controller('api/users')
export class UserController {
  @UseGuards(MyJwtGuard)
  @Get('me')
  me(@GetUser() user: User) {
    console.log(user);
    return user;
  }
}
