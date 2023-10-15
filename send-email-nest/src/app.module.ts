import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
console.log(process.env.NODE_ENV)

@Module({
  imports: [ClientsModule.register([
    {
      name: 'NOTIFICATION_EMAIL',
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://${process.env.USER_RABBITMQ}:${process.env.PASS_RABBITMQ}@${process.env.HOST_RABBITMQ}:${process.env.PORT_RABBITMQ}`],
        queue: 'send-email',
        queueOptions: {
          durable: true,
        },
      },
    },
  ]), ConfigModule.forRoot({envFilePath: '.env'})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
