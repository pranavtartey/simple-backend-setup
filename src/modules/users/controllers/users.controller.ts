import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get('get-analytics')
  getAnalytics() {
    return this.usersService.getAnalytics();
  }

  @Get('get-activities')
  getActivities() {
    return this.usersService.getActivities();
  }
}
