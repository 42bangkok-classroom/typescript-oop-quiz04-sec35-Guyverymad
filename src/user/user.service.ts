import { Injectable } from '@nestjs/common';
import { IUser } from './user.interface';
@Injectable()
export class UserService {
  test(): IUser[] {
    return [];
  }
}
