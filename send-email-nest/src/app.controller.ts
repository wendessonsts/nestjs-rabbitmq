import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Email } from './dto/entity/email.entity';

@Controller('notification')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('send-email')
  async sendEmail(@Body() email : Email): Promise<Object> {
    return await this.appService.sendEmail(email);
  }
}
