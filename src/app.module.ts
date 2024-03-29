import { Module } from '@nestjs/common';
import { UsersController } from './user/users.controller';
import { UsersService } from './user/users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
