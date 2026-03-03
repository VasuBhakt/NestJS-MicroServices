/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { PRODUCT_GRPC_URL, PRODUCT_SERVICE, REDIS_PORT } from 'apps/const'
import { PRODUCTS_PACKAGE_NAME } from '../../../types/proto/products'
import { join } from 'path';

async function bootstrap() {
  // const tcpMS = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  //   transport: Transport.TCP,
  //   options: {
  //     port: PRODUCT_SERVICE.port
  //   }
  // });
  // const redisMS = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  //   transport: Transport.REDIS,
  //   options: {
  //     port: REDIS_PORT
  //   }
  // });
  // await Promise.all([tcpMS.listen(), redisMS.listen()]);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: PRODUCTS_PACKAGE_NAME,
      protoPath: join(__dirname, 'proto/products.proto'),
      url: PRODUCT_GRPC_URL
    }
  })
  await app.listen();
  Logger.log(
    `🚀 Application is running on gRPC channel`,
  );
}

bootstrap();
