import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const tcpMS = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: {
      port: 4002,
    }
  });
  const redisMS = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule, {
      transport: Transport.REDIS,
      options: {
        port: 6379
      }
    }
  )
  await Promise.all([tcpMS.listen(), redisMS.listen()]);
  //await app.listen();
  console.log('Product service is running on port 4002');
}
bootstrap();
