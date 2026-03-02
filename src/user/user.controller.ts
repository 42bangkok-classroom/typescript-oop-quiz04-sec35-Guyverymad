import { Controller, Get } from '@nestjs/common';
import { Userservice} from './user.service';

@Controller('user')
export class  {
  constructor(private readonly userservice:Userservice ) {}

  @Get('test')
  test(): any {
    return this.userservice.test();
  }
}