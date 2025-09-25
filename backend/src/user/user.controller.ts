import { Body, Controller, Post } from '@nestjs/common';
import { type IUser } from 'src/types/types';
import { User } from './user.schema';

@Controller('api/users')
export class UserController {
  @Post()
  async create(@Body() user: IUser) {
    const u = await User.create(user);
    return u;
  }
}
