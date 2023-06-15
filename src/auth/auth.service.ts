import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { AuthRegisterDTO, AuthLoginDTO } from './dto/auth.dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async register(authDTO: AuthRegisterDTO) {
    const hashedPassword = await argon.hash(authDTO.password);
    try {
      const user = await this.prisma.user.create({
        data: {
          email: authDTO.email,
          name: authDTO.name,
          hashedPassword: hashedPassword,
        },
        select: {
          id: true,
          email: true,
          name: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
      if (error.code === 'P2002') {
        throw new ForbiddenException('Email already exists');
      }
      return { error };
    }
  }

  async login(authDTO: AuthLoginDTO) {
    const user = await this.prisma.user.findUnique({
      where: { email: authDTO.email },
    });
    if (!user) {
      throw new ForbiddenException('user doesnt exist');
    }
    const validPassword = await argon.verify(
      user.hashedPassword,
      authDTO.password,
    );
    if (!validPassword) {
      return 'password is not valid';
    }
    const { hashedPassword, ...result } = user;

    return await this.signJwt(user.id, user.email);
  }

  async signJwt(
    userId: number,
    email: string,
  ): Promise<{ accessToken: string }> {
    const payload = { sub: userId, email };
    const jwtString = await this.jwtService.signAsync(payload, {
      expiresIn: '10m',
      secret: this.configService.get('JWT_SECRET'),
    });
    return { accessToken: jwtString };
  }
}
