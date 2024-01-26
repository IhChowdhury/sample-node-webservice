import {
  BadRequestException,
  Body,
  Controller,
  ForbiddenException,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { CreateUserRequest } from './create.user.request';
import { UsersService } from './users.service';
import { User } from './user';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { UUID } from 'crypto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiBody({ type: CreateUserRequest })
  @ApiCreatedResponse({ description: 'Created user data', type: User })
  @Post()
  addUser(@Body() request: CreateUserRequest): User {
    if (this.userService.isUserExist(request.email)) {
      throw new ForbiddenException('User already exist!');
    }
    const user = new User(request.name, request.email);
    this.userService.create(user);
    return user;
  }

  @ApiParam({ name: 'id', type: 'string', format: 'UUID' })
  @ApiOkResponse({ description: 'The user data', type: User })
  @Get(':id')
  finduser(@Param('id') id: UUID): User {
    const searchedUser = this.userService.findById(id);
    if (searchedUser) {
      return searchedUser;
    }

    throw new BadRequestException('User not found!');
  }
}
