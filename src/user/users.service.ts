import { Injectable } from '@nestjs/common';
import { User } from './user';
import { UUID } from 'crypto';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(user: User) {
    this.users.push(user);
  }

  isUserExist(email: string): boolean {
    const user = this.users.find((user) => user.email === email);
    return user ? true : false;
  }

  findById(id: UUID): User {
    return this.users.find((user) => user.id === id);
  }
}
