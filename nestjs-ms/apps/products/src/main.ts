/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import {PRODUCT_SERVICE, REDIS_PORT} from 'apps/const'

async function bootstrap() {
  const tcpMS = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: {
      port: PRODUCT_SERVICE.port
    }
  });
  const redisMS = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.REDIS,
    options: {
      port: REDIS_PORT
    }
  });
  await Promise.all([tcpMS.listen(), redisMS.listen()]);
  //await app.listen();
  Logger.log(
    `🚀 Application is running on: http://localhost:${PRODUCT_SERVICE.port} and listening to Redis on ${REDIS_PORT}`,
  );
}

bootstrap();
