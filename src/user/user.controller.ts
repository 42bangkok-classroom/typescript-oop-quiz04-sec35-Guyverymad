import { Controller, Get } from '@nestjs/common';
import { userservice} from './user.service';

@Controller()
export class  {
  constructor(private readonly userservice:userservice ) {}

  @Get()
  test(): string {
    return this.userservice.test();
  }
}