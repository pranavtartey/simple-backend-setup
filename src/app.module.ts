import { Module, Controller, Get } from '@nestjs/common';
import { UsersController } from './modules/users/controllers/users.controller';
import { UsersService } from './modules/users/services/users.service';

@Controller('/')
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [UsersService],
})
export class AppModule {}
