import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ORDER_SERVICE, PAYMENT_SERVICE, PRODUCT_SERVICE, USER_SERVICE } from '../../../const';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrdersController } from './orders/orders.controller';

@Module({
  imports: [ClientsModule.register([
    {
      name: USER_SERVICE.name,
      transport: Transport.TCP,
      options: {
        port: USER_SERVICE.port
      }
    },
    {
      name: ORDER_SERVICE.name,
      transport: Transport.TCP,
      options: {
        port: ORDER_SERVICE.port
      }
    },
    {
      name: PRODUCT_SERVICE.name,
      transport: Transport.TCP,
      options: {
        port: PRODUCT_SERVICE.port
      }
    },
    {
      name: PAYMENT_SERVICE.name,
      transport: Transport.TCP,
      options: {
        port: PAYMENT_SERVICE.port
      }
    },
  ])],
  controllers: [AppController, OrdersController],
  providers: [AppService],
})
export class AppModule {}
