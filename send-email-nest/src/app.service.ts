import { Inject, Injectable } from '@nestjs/common';
import { Email } from './dto/entity/email.entity';
import { ClientProxy } from '@nestjs/microservices';
import { SuccessResponseDTO } from './dto/responses/sucess.dto';
import { ErrorResponseDTO } from './dto/responses/error.dto';


@Injectable()
export class AppService {
  constructor(@Inject('NOTIFICATION_EMAIL') private client: ClientProxy) {}

  async sendEmail(body: Email): Promise<Object> {
    try {
      await this.client.send({cmd: 'notification-email'}, body.email).toPromise();
      return new SuccessResponseDTO('Request Success', 'Email notificado com sucesso', 200);
    } catch (err) {
      console.error('Error: ' + JSON.stringify(err));
      return new ErrorResponseDTO('Internal Server Error', JSON.stringify(err), 500);
    }
  }
}