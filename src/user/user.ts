import { ApiProperty } from '@nestjs/swagger';
import { UUID, randomUUID } from 'crypto';

export class User {
  @ApiProperty()
  id: UUID = randomUUID();

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
