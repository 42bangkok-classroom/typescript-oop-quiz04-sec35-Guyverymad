import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { IUser } from './user.interface';
@Injectable()
export class UserService {
  test(): IUser[] {
    return [];
  }
  findAll(): IUser[] {
    const filePath = path.join(process.cwd(), 'data', 'users.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const users: IUser[] = JSON.parse(fileData) as unknown as IUser[];
    return users;
  }
}
