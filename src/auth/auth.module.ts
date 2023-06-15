import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategy/jwt.strategy';
import { PrismaService } from '../../prisma/prisma.service';
@Module({
  imports: [JwtModule.register({})],
  providers: [AuthService, ConfigService, JwtStrategy, PrismaService],
  controllers: [AuthController],
})
export class AuthModule {}
