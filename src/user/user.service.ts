import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { User } from './schema/user.schema';
import { UserModel } from './schema/user.model';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserData: CreateUserDTO) {
    await this.validateCreateUserData(createUserData);
    const user = await this.userRepository.create({
      ...createUserData,
      password: await bcrypt.hash(createUserData.password, 10),
    });
    return this.toModel(user);
  }
  private async validateCreateUserData(createUserData: CreateUserDTO) {
    try {
      await this.userRepository.findOne({ email: createUserData.email });
      throw new UnprocessableEntityException('Email already exists.');
    } catch (err) {}
  }
  private toModel(userDocument: User): UserModel {
    return {
      id: userDocument._id.toHexString(),
      email: userDocument.email,
    };
  }
  
}
