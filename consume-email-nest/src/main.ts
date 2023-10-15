import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import {config} from 'dotenv'

async function bootstrap() {
  config()
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${process.env.USER_RABBITMQ}:${process.env.PASS_RABBITMQ}@${process.env.HOST_RABBITMQ}:${process.env.PORT_RABBITMQ}`],
      queue: 'send-email',
      queueOptions: {
        durable: true
      }
    }
    
  })
  await app.listen();
}
bootstrap();
