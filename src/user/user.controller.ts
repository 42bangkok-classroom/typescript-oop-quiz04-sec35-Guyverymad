import { Controller, Get} from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './user.interface';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('test')
  test(): IUser {
    return this.userService.test();
  }
}
