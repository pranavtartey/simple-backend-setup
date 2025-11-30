import { Injectable } from '@nestjs/common';
import { USER_DATA } from 'src/constants/user-data';

@Injectable()
export class UsersService {
  constructor() {}
  getUsers() {
    return USER_DATA.users;
  }

  getAnalytics() {
    return USER_DATA.analytics;
  }

  getActivities() {
    return USER_DATA.userActivity;
  }
}
