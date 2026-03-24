import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
//import { IUser } from './user.interface';
//mport { NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService{
  test(): string[]{
    return []
  }
}
