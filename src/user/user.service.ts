import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { IUser } from './user.interface';
import { NotFoundException } from '@nestjs/common';
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
  findOne(id: string, fields?: string | string[]): Partial<IUser> {
    const allUsers = this.findAll();

    const user = allUsers.find((u) => String(u.id) === String(id));

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (fields !== undefined) {
      let fieldArray: string[] = [];

      if (typeof fields === 'string') {
        fieldArray = fields
          .split(',')
          .map((f) => f.trim())
          .filter((f) => f !== '');
      } else if (Array.isArray(fields)) {
        fieldArray = fields;
      }

      const filteredUser: Partial<IUser> = {};
      fieldArray.forEach((field) => {
        const key = field as keyof IUser;
        if (user[key] !== undefined) {
          Object.assign(filteredUser, { [key]: user[key] });
        }
      });

      return filteredUser;
    }
    return user;
  }
}
