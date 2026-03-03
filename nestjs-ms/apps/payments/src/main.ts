/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import {PAYMENT_SERVICE} from 'apps/const'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: {
      port: PAYMENT_SERVICE.port
    }
  });
  await app.listen();
  Logger.log(
    `🚀 Application is running on: http://localhost:${PAYMENT_SERVICE.port}`,
  );
}

bootstrap();
