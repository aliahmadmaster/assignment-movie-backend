import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserData: CreateUserDTO) {
    return this.userService.createUser(createUserData);
  }
}
