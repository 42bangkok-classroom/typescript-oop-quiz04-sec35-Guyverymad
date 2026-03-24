import { Controller, Get, Query, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './user.interface';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('test')
  test(): IUser[] {
    return this.userService.test();
  }
  @Get()
  findAll(): IUser[] {
    return this.userService.findAll();
  }
  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Query('fields') fields?: string,
  ): Partial<IUser> {
    return this.userService.findOne(id, fields);
  }
}
