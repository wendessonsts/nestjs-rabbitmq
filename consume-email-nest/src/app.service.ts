import { Injectable } from '@nestjs/common';
import { Email } from './dto/entity/email.entity';
import { SuccessResponseDTO } from './dto/responses/sucess.dto';

@Injectable()
export class AppService {
  async sendEmail(email: Email): Promise<any> {
    return new SuccessResponseDTO('Request Success', `Email ${email} enviado com sucesso ao destinatario`, 200);
  }
}
