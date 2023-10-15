import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { Email } from './dto/entity/email.entity';
import { SuccessResponseDTO } from './dto/responses/sucess.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({cmd: 'notification-email'})
  async getNotificationEmail(email: Email): Promise<any> {
    let response = await this.appService.sendEmail(email);
    console.log(response)
    return response;
  }
}
