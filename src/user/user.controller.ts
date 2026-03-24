import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController{
  constructor(private readonly userService: UserService){} 
  @Get('test')
  test(): string {
    return this.userService.test();
  }

  
  
}
