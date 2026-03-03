import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersController } from './orders/orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { REDIS_PORT, REDIS_PRODUCT_CLIENT } from 'apps/const';

@Module({
  imports: [ClientsModule.register([
    {
      name: REDIS_PRODUCT_CLIENT,
      transport: Transport.REDIS,
      options: {
        port: REDIS_PORT
      }
    }
  ])],
  controllers: [AppController, OrdersController],
  providers: [AppService],
})
export class AppModule {}
